import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

import {AuthService} from "../../../services/auth.service";
import {User} from '../../../models/user.ts';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class BusinessRegisterComponent implements OnInit {

  error: string = '';
  public RegisterForm: FormGroup; //our model driven form
  public user: User;

  constructor(private _router: Router,
              private _authService: AuthService,
              private _fb: FormBuilder) {}

  ngOnInit() {

    this.RegisterForm = this._fb.group({
      username: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      first_name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      last_name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      confirm_password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
    })
  }


  register(model, isValid) {

    if (isValid) {

      this._authService.register(model)
        .subscribe(this.successResponse, this.errorResponse);
    }

  }

  successResponse(data) {

    //noinspection TypeScriptUnresolvedVariable
    this._authService.saveToken(data.token);
    //noinspection TypeScriptUnresolvedVariable
    this._authService.saveProfile(data.data);
    this._router.navigate(['/business/profile']);
  };

  errorResponse(err) {

    this.error = err.message;
  }


}
