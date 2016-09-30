import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../../services/auth-service.service";
import {ModalModule} from "ng2-bootstrap/components/modal";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers:[AuthService]
})
export class SignInComponent implements OnInit {
  model: any = {};
  loading: boolean = false;
  error: string;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {

  }

  login(username,password) {

    var self = this;

    this.authService.login(username, password,  function (err) {

      if (err) {

        self.error = err.message;
      }

    });
  }


  goToRegisterView(){

    this.router.navigate(['/business/register'])
  }

}
