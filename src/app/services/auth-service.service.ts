import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import { tokenNotExpired} from 'angular2-jwt';


// Avoid name not found warnings
declare var Auth0Lock: any;



@Injectable()
export class AuthService {

  public token: string;
  loggedIn: boolean = false;
  currentUser: Object = null;

  // Configure Auth0
  lock = new Auth0Lock('HEqIwQhIWpDgdCXlU7Rinh8RrfN5ulYZ', 'zunde.eu.auth0.com', {});

  userProfile: Object;


  constructor(private http: Http, private router: Router) {

    this.token = localStorage.getItem('id_token');

    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

  }

  public login(username, password, cb) {

    return this.lock.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, cb)
  }

  public register (username, password) {

    this.lock.signup({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {

      if (err) alert("something went wrong: " + err.message);

    });

  };

  public getProfile (cb) {

    if(this.token.length < 5)  return false;

    this.lock.getProfile(this.token, cb)
  }

  public logout(): void {

    //clear the token from the localstorage to log the user out
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
  }

  getUser(): Object {

    return this.currentUser;
  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem('id_token');
  }

}
