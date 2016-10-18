import {Injectable} from '@angular/core';
import {AuthService} from "./auth-service.service";
import {UserService} from "./user-service.service";
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class UtilsService {

  API_URL: string;
  message: string;

  constructor(private _authService: AuthService,
              private _userService: UserService, private authHttp: AuthHttp) {
  }


  getSecuredData() {

    this.authHttp.get(`${this.API_URL}/endpointtotheurl`)
      .map(res => res.json())
      .subscribe(
        data  => this.message = data.text,
        error => this.message = error._body || error
      )

  }

}
