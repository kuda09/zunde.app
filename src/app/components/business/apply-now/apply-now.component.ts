import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user-service.service";
import {AuthService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent implements OnInit {

  details: Object = {};

  constructor(private _userService: UserService, private _authService: AuthService) { }

  ngOnInit() {

  }

  applyNow(details){

    console.log(details);

  }

}
