import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServiceService {

    public token: string;

    constructor(private http: Http) {

        //set token if save in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;

    }

    login(username, password): Observable<boolean> {

        var body = JSON.stringify({username: username, password: password});

        return this.http.post('/api,authenticate', body)
            .map((response: Response) => {

                let token = response.json() && response.json().token;

                if(token) {

                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    return true;
                } else {

                    return false;
                }

            })
    }

    logout() : void {

        //clear the token from the localstorage to log the user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}
