import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()

export class ProfileResolver implements Resolve<any> {

    constructor() {

    }

    resolve ( router: ActivatedRouteSnapshot){

      return JSON.parse(localStorage.getItem('profile'));

    }
}
