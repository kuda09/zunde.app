import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {UserService} from "../../../services/user-service.service";
import {AuthService} from "../../../services/auth-service.service";

@Component({
  selector: 'app-your-personal-details',
  templateUrl: './your-personal-details.component.html',
  styleUrls: ['./your-personal-details.component.scss']
})
export class YourPersonalDetailsComponent implements OnInit {

  details: Object = {};
  public ApplyNowForm: FormGroup;
  public submitted: boolean = false;
  public events: any[] = [];


  constructor(private _userService: UserService,
              private _authService: AuthService,
              private _fb: FormBuilder,
              private router: Router) {
  }



  ngOnInit() {
  }


  nextStep() {


    this.router.navigate(['/apply-now/bank-statements']);

  }

}
