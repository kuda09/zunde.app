import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from "../../../services/auth-service.service";
import {ModalModule} from "ng2-bootstrap/components/modal";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers:[AuthServiceService]
})
export class SignInComponent implements OnInit {
  model: any = {};
  loading: boolean = false;
  error: string = '';

  constructor(private router: Router, private authService: AuthServiceService) {

  }

  ngOnInit() {

  }

  login() {
    this.loading = true;

    console.log(this.model);

    this.authService.login(this.model.username, this.model.password)
        .subscribe(result => {

          if (result) {
            this.router.navigate(['/']);
          } else {

            this.error = 'Username or password is incorrect';
            this.loading = false;
          }
        })
  }

}
