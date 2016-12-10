import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from "../../../services/auth-service.service";
import {ModalModule} from "ng2-bootstrap/components/modal";

import {SignInModel} from '../../../models/sign-in';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [AuthService]
})
export class SignInComponent implements OnInit {
  loading: boolean = false;
  error: string;

  public SignInForm: FormGroup; //our model driven form
  public ForgotPasswordForm: FormGroup; //our model driven form
  public submitted: boolean; //keep track whether the form is submitted
  public events: any[] = []; //use later to display form events

  constructor(private router: Router,
              private authService: AuthService,
              private _fb: FormBuilder) {
  }

  ngOnInit() {

    this.SignInForm = new FormGroup({
      username: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
    })


    this.ForgotPasswordForm = this._fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]]
    })

  }

  login(model: SignInModel, isValid: boolean) {

    var self = this;

    if (isValid) {

      this.authService.login(model.username, model.password, function (err) {

        if (err) {
          self.error = err.message;

        }

      });
    }

  }

  forgotPassword(model, isValid: boolean) {

    var self = this;

    console.log(model);


  }

  goToRegisterView() {

    this.router.navigate(['/business/register'])
  }

}
