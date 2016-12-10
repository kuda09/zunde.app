import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

import {UserService} from "../../../services/user-service.service";
import {AuthService} from "../../../services/auth-service.service";
import {ApplyNowService} from "../../../services/apply-now.service";

import {ApplyNowModel} from "../../../models/apply-now";


@Component({
    selector: 'app-apply-now',
    templateUrl: './apply-now.component.html',
    styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent implements OnInit {

    details: Object = {};
    //data: FirebaseObjectObservable;
    public ApplyNowForm: FormGroup;
    public submitted: boolean = false;
    public events: any[] = [];


    constructor(private _userService: UserService,
                private _authService: AuthService,
                private _fb: FormBuilder,
                private router: Router,
                private _applyNowService: ApplyNowService,
                private af: AngularFire) {
    }

    ngOnInit() {

        if(this._authService.isLoggedIn()){

            this._authService.getProfile();
        }

        this.ApplyNowForm = this._fb.group({
            loan_details: this._fb.group({
                desired_amount: ['', [Validators.required]],
                date_required: ['', [Validators.required]],
                loan_use: ['', [Validators.required]],
            }),
            person_details: this._fb.group({
                first_name: ['', [Validators.required]],
                last_name: ['', [Validators.required]],
                contact_number: ['', [Validators.required]],
                email_address: ['', [Validators.required]],

            }),
            how_did_you_hear_about_us: new FormControl('')
        })

    }

    applyNow(model: ApplyNowModel, isValid: boolean) {

        if(isValid){
            this._applyNowService.saveInformationToStorage(model);
            this.router.navigate(['/apply-now/your-business-details']);
        }

    }

}
