import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {UserService} from "./auth.service";

@Injectable()
export class ProfileService {

  constructor(private authService: AuthService,
              private userService: UserService) {

  }


}
