import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth-service.service";
import {UserService} from "../../../services/user-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: Object = null;
  show: boolean = false;

  constructor(
    private _authService: AuthService,
    private _userService: UserService,) {

  }

  ngOnInit() {

    if(this._authService.isLoggedIn()){

      this.user = this._userService.getUser();
    }
  }

  displayTab(tab){

    console.log(tab);


  }



}
