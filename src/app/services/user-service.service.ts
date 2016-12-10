import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {AuthService} from "./auth-service.service";
import {User} from "../models/user";

@Injectable()
export class UserService {
  private token: string;

  constructor(private http: Http, private authService: AuthService) { }

  public getUser() {

    if(this.authService.isLoggedIn()) {
      var profile = JSON.parse(localStorage.getItem('profile'));
      return profile;
    }
    return null;
  }

  public isUserVerified() {

    if(this.authService.isLoggedIn()) {

      var profile = JSON.parse(localStorage.getItem('profile'));

      if(profile.email_verified) {

        return true;
      }

      return false;
    }

    return null;

  }



}
