import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {SignInModel} from "../../../models/sign-in";
import {SignUpModel} from "../../../models/sign-up";
@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss']
})
export class InvestorsComponent implements OnInit {

  public SignUp: FormGroup; //our model driven form

  public submitted: boolean; //keep track whether the form is submitted
  public events: any[] = []; //use later to display form events

  constructor(private router: Router,
              private _fb: FormBuilder) {
  }

  ngOnInit() {

    this.SignUp = this._fb.group({
      email_address: ['', [Validators.required, Validators.minLength(5)]],
      first_name: ['', [Validators.required, Validators.minLength(5)]],
      last_name: ['', [Validators.required, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      type_of_investment: ['', [Validators.required, Validators.minLength(5)]],
    });

    /*this.SignInForm = new FormGroup({
      username: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
      password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
    });*/
  }


  signup(model: SignUpModel, isValid: boolean) {

    console.log(model);

  }

  login(model: SignInModel, isValid: boolean) {


    console.log(model);


  }

}
