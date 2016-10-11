import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import { tokenNotExpired} from 'angular2-jwt';


// Avoid name not found warnings
declare var Auth0Lock: any;
declare var Auth0: any;



@Injectable()
export class AuthService {

  public token: string;
  loggedIn: boolean = false;
  currentUser: Object = null;

  // Configure Auth0
  lock = new Auth0Lock('HEqIwQhIWpDgdCXlU7Rinh8RrfN5ulYZ', 'zunde.eu.auth0.com', {});

  userProfile: Object;

  auth0 = new Auth0({
    domain: 'zunde.eu.auth0.com',
    clientID: 'HEqIwQhIWpDgdCXlU7Rinh8RrfN5ulYZ',
    responseType: 'token',
    callbackURL: 'http://localhost:4200/business/business-profile',
  });


  constructor(private http: Http, private router: Router) {

    this.token = localStorage.getItem('id_token');
    var result = this.auth0.parseHash(window.location.hash);

    // Set userProfile attribute of already saved profile
    //this.userProfile = JSON.parse(localStorage.getItem('profile'));

    if (result && result.idToken) {

      localStorage.setItem('id_token', result.idToken);

      this.router.navigate(['business/business-profile']);

    } else if (result && result.error) {

      console.log('error: ' + result.error);
    }


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

    //noinspection TypeScriptValidateJSTypes
    this.auth0.signup({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: username,
      password: password,
    }, function(err) {

      if (err) alert("something went wrong: " + err.message);

    });

  };

  public getProfile () {

    if(this.token === null)  return false;

    this.lock.getProfile(this.token, (error, profile) => {

      if(error === null) {

        console.log(profile);
        localStorage.setItem('profile', JSON.stringify(profile));
      }
    });
  }

  public logout(): void {

    //clear the token from the localstorage to log the user out
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.router.navigate(['sign-in']);
    window.location.reload();
  }


  isLoggedIn(): boolean {
    return tokenNotExpired();
  }

}
