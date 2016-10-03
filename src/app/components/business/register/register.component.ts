import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class BusinessRegisterComponent implements OnInit {

  error: string = '';

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }


  /*register(username, password) {

    var self = this;

    this._authService.register(username,password, (err) => {

      if(err) if (err) self.error = err.message;

    });
  }*/



}
