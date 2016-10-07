import {Component, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../services/auth-service.service";
import {UserService} from "../../../services/user-service.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: Object = null;
  show: boolean = false;
  tabs: string[] = ['overview', 'repayments', 'company_details', 'user_details', 'business_verification'];

  constructor(private _authService: AuthService,
              private _userService: UserService) {

  }

  ngOnInit() {

    if (this._authService.isLoggedIn()) {

      this.user = this._userService.getUser();
    }
  }

  displayTab(selectedTab) {

    console.log(tab);

  }


}
