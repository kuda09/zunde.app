import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from "../services/auth-service.service";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private _authService: AuthService) { }

  canActivate () {

    if(this._authService.isLoggedIn()) {

      return true;
    }

    this.router.navigate(['sign-in']);
    return false;
  }

}
