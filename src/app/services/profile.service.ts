import {Injectable} from '@angular/core';
import {AuthService} from "./auth-service.service";
import {UserService} from "./user-service.service";

@Injectable()
export class ProfileService {

  constructor(private authService: AuthService,
              private userService: UserService) {

  }

  getProfile () {



  }

}
