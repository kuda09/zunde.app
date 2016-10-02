import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss'],
  providers: [AuthService]
})
export class BusinessProfileComponent implements OnInit {

  userProfile: Object = null;
  name: string = 'kuda';

  constructor(private _authService: AuthService) {


    console.log('yh man how are youa')
  }

  ngOnInit() {

    var self = this;

    /*this._authService.getProfile((error, profile) => {

      if (error) {
        // Handle error
        console.log(error);
        return;
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      self.userProfile = profile;

    })*/
  }

  isLoggedIn() {

    return this._authService.isLoggedIn();
  }

}
