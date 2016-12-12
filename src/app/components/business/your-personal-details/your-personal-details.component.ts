import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {UserService} from "../../../services/user-service.service";
import {AuthService} from "../../../services/auth-service.service";
import {ApplyNowModel} from "../../../models/apply-now";
import {ApplyNowService} from "../../../services/apply-now.service";

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
                private router: Router,
                private _applyNowService: ApplyNowService) {
    }


    ngOnInit() {

        this.ApplyNowForm = this._fb.group({
            person_details: this._fb.group({
                home_address: ['', [Validators.required]],
                post_code: ['', [Validators.required]],
                home_phone: ['', [Validators.required]],
                date_of_birth: ['', [Validators.required]]
            }),
            business_share: new FormControl('', [Validators.required]),
            national_insurance: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            confirm_password: new FormControl('', [Validators.required]),
        })
    }


    applyNow(model, isValid: boolean) {

        if(isValid){
            this._applyNowService.saveInformationToStorage(model);

            this.router.navigate(['/apply-now/bank-statements']);
        }
    }


}
