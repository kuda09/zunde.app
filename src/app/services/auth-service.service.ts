import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {tokenNotExpired} from 'angular2-jwt';
import {HttpService} from "./http.service";


@Injectable()
export class AuthService {


    constructor(private http: Http,
                private router: Router,
                private _httpService: HttpService) {

    }

    login(data): Observable<any> {
        return this._httpService.postData('/user/login', data);
    }

    register(details, cb) {

    };

    getProfile() {

    }


    saveProfile(data){

        if(localStorage.getItem('profile') === null) {
            localStorage.setItem('profile', JSON.stringify(data));
        }

    }

    logout(): void {

    }

     saveToken(token: string) {

        if(localStorage.getItem('token') === null) {
            localStorage.setItem('token', token);
        }

    }

    removeLocalData() {

        localStorage.removeItem('token');

    }


    isLoggedIn(): boolean {
        return tokenNotExpired();
    }

}
