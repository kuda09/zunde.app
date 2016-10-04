import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {UserService} from "../../../services/user-service.service";
import {AuthService} from "../../../services/auth-service.service";
import {business_details} from '../../../models/apply-now'
import {ApplyNowService} from "../../../apply-now.service";


@Component({
  selector: 'app-your-business-details',
  templateUrl: './your-business-details.component.html',
  styleUrls: ['./your-business-details.component.scss']
})
export class YourBusinessDetailsComponent implements OnInit {

  details: Object = {};
  public ApplyNowForm: FormGroup;
  public submitted: boolean = false;
  public events: any[] = [];


  constructor(private _userService: UserService,
              private _authService: AuthService,
              private _fb: FormBuilder,
              private router: Router,
              private applyNowService: ApplyNowService) {
  }


  ngOnInit() {


    this.ApplyNowForm = this._fb.group({
      legal_name: ['', [Validators.required, Validators.minLength(5)]],
      business_address: ['', [Validators.required, Validators.minLength(5)]],
      post_code: ['', [Validators.required, Validators.minLength(5)]],
      business_phone: ['', [Validators.required, Validators.minLength(5)]],
      business_trading_date: ['', [Validators.required, Validators.minLength(5)]],
      legal_entity_type: ['', [Validators.required, Validators.minLength(5)]],
      business_tax_id: ['', [Validators.required, Validators.minLength(5)]],
      annual_revenue: ['', [Validators.required, Validators.minLength(5)]],
      bank_balance: ['', [Validators.required, Validators.minLength(5)]],

    })
  }

  applyNow(model: business_details, isValid: boolean) {


    console.log(model);

    this.router.navigate(['/apply-now/your-personal-details']);

    this.applyNowService.saveInformationToStorage(model);

    if (isValid) {


    }


  }


}
