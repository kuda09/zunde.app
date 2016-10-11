import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService} from '../services/auth-service.service';

@Injectable()

export class ProfileResolver implements Resolve<any> {

    constructor(
        private _authService: AuthService
    ) {

    }

    resolve ( router: ActivatedRouteSnapshot){

        return this._authService.getProfile();

    }
}