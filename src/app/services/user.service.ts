import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthService} from "./auth.service";

@Injectable()
export class UserService {

  constructor(private authService: AuthService) { }

  public getUser() {

    if(this.authService.isLoggedIn()) {
      var profile = JSON.parse(localStorage.getItem('profile'));
      return profile;
    }
    return null;
  }

  public isUserVerified() {

    if(this.authService.isLoggedIn()) {

      const profile = this.getUser();

      if(profile.email_verified) {

        return true;
      }

      return false;
    }

    return null;

  }

}
