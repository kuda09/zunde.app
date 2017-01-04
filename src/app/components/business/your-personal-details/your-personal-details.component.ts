import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {person_details} from "../../../models/apply-now";
import {ApplyNowService} from "../../../services/apply-now.service";
import {HttpService} from "../../../services/http.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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


    constructor(private _fb: FormBuilder,
                private router: Router,
                private _applyNowService: ApplyNowService,
                private httpModule: HttpService) {
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
            password: new FormControl('', [Validators.required, Validators.minLength(5)]),
            confirm_password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        });


        this.httpModule.getData('/users')
            .subscribe(data => console.log(data));

    }


    applyNow(model: person_details, isValid: boolean) {

        if (isValid) {
            this._applyNowService.saveInformationToStorage(model);

            //this.router.navigate(['/apply-now/bank-statements']);

            this.httpModule.postData('user/register',model)
                .subscribe( data => {

                    console.log(data);
                });
        }
    }


}
