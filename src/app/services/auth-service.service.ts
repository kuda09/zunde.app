import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Injectable()
export class AuthServiceService {

  public token: string;
  loggedIn: boolean = false;
  currentUser: Object = null;

  constructor(private http: Http, private router: Router) {

    //set token if save in local storage
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.currentUser && this.currentUser.token;

    if(this.token){

      this.loggedIn = true;
    }

  }

  login(username, password): Observable<boolean> {

    var body = JSON.stringify({username: username, password: password});

    return this.http.post('/api/authenticate', body)
      .map((response: Response) => {

        let token = response.json() && response.json().token;

        if (token) {

          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));

          this.loggedIn = true;

          window.location.reload();

          return true;
        } else {

          return false;

        }

      })
  }

  logout(): void {

    //clear the token from the localstorage to log the user out
    this.token = null;
    localStorage.removeItem('currentUser');
    window.location.reload();
  }

  getUser(): Object  {

    return this.currentUser;
  }

  isLoggedIn():boolean {

    return this.loggedIn;
  }

}
