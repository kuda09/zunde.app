import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {HttpService} from "./http.service";


@Injectable()
export class AuthService {

    constructor(private _httpService: HttpService) {}

    login(data): Observable<any> {
        return this._httpService.postData('/user/login', data);
    }

    register(data): Observable<{}> {

      return this._httpService.postData('/user/register', data);
    };

    saveProfile(data){
        if(localStorage.getItem('profile') === null) {
            localStorage.setItem('profile', JSON.stringify(data));
        }
    }

    logout(): void {

      if(localStorage.getItem('token') !== null) {
        localStorage.removeItem('token');
      }
    }

     saveToken(token: string): void {

        if(localStorage.getItem('token') === null) {
            localStorage.setItem('token', token);
        }

    }

    isLoggedIn(): boolean {
        return tokenNotExpired();
    }

}
