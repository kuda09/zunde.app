import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {UserService} from "../../../services/user-service.service";
import {AuthService} from "../../../services/auth-service.service";
import {ApplyNowModel} from "../../../models/apply-now";



@Component({
    selector: 'app-apply-now',
    templateUrl: './apply-now.component.html',
    styleUrls: ['./apply-now.component.scss']
})
export class ApplyNowComponent implements OnInit {

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

        this.ApplyNowForm = this._fb.group({
            loan_details: this._fb.group({
                desired_amount: ['', [Validators.required, Validators.minLength(5)]],
                date_required: ['', [Validators.required, Validators.minLength(5)]],
                loan_use: ['', [Validators.required, Validators.minLength(5)]],
            }),
            person_details: this._fb.group({
                first_name: ['', [Validators.required, Validators.minLength(5)]],
                last_name: ['', [Validators.required, Validators.minLength(5)]],
                contact_number: ['', [Validators.required, Validators.minLength(5)]],
                email_address: ['', [Validators.required, Validators.minLength(5)]],

            }),
            how_did_you_hear_about_us: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
        })

    }

    applyNow(model: ApplyNowModel, isValid: boolean) {

        this.submitted = true;

        console.log(model);

        this.router.navigate(['/apply-now/your-business-details']);


    }

}
