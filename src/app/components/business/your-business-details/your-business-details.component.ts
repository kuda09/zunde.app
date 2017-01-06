import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from "../../../services/auth.service";
import {business_details} from '../../../models/apply-now'
import {ApplyNowService} from "../../../services/apply-now.service";


@Component({
  selector: 'app-your-business-details',
  templateUrl: './your-business-details.component.html',
  styleUrls: ['./your-business-details.component.scss']
})
export class YourBusinessDetailsComponent implements OnInit {

  public ApplyNowForm: FormGroup;
  constructor(
              public _authService: AuthService,
              private _fb: FormBuilder,
              private router: Router,
              private applyNowService: ApplyNowService) {
  }


  ngOnInit() {

    this.ApplyNowForm = this._fb.group({
      business_details: this._fb.group({
        legal_name: ['', [Validators.required]],
        business_address: ['', [Validators.required]],
        post_code: ['', [Validators.required]],
        business_phone: ['', [Validators.required]],
        business_trading_date: ['', [Validators.required]],
        legal_entity_type: ['', [Validators.required]],
        business_tax_id: ['', [Validators.required]],
        annual_revenue: ['', [Validators.required]],
        bank_balance: ['', [Validators.required]]
      })
    })
  }

  applyNow(model: business_details, isValid: boolean) {

    if (isValid) {

      this.router.navigate(['/apply-now/your-personal-details']);



      this._authService.register(model)
        .subscribe((data) => {


          console.log(data);
        })

      this.applyNowService.saveInformationToStorage(model);
    }


  }

}
