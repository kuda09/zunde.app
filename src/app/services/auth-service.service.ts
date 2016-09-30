import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {tokenNotExpired} from 'angular2-jwt';


// Avoid name not found warnings
declare var Auth0Lock: any;


var config = {
  domain: 'zunde.eu.auth0.com',
  clientID: 'HEqIwQhIWpDgdCXlU7Rinh8RrfN5ulYZ',
  responseType: 'token',
  callbackURL: 'http://localhost:4200/business-profile',
};

@Injectable()
export class AuthService {

  public token: string;
  loggedIn: boolean = false;
  currentUser: Object = null;

  // Configure Auth0
  lock = new Auth0Lock('HEqIwQhIWpDgdCXlU7Rinh8RrfN5ulYZ', 'zunde.eu.auth0.com', {});

  userProfile: Object;

  auth0 = new Auth0(config);

  constructor(private http: Http, private router: Router) {

    var result = this.auth0.parseHash(window.location.hash);
    this.token = localStorage.getItem('id_token');

    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

  }

  public login(username, password, cb) {

    return this.auth0.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, cb)
  }

  public register (username, password) {

    this.auth0.signup({
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

  public logout(userProfile): void {

    //clear the token from the localstorage to log the user out
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    userProfile = undefined;
  }

  getUser(): Object {

    return this.currentUser;
  }

  isLoggedIn(): boolean {

    return !!localStorage.getItem('id_token');
  }

}
