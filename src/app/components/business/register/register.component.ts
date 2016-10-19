import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';

import {AuthService} from "../../../services/auth-service.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [AuthService]
})
export class BusinessRegisterComponent implements OnInit {

    error: string = '';
    public RegisterForm: FormGroup; //our model driven form
    public submitted: boolean = false; //keep track whether the form is submitted
    public events: any[] = []; //use later to display form events

    constructor(private _router: Router,
                private _authService: AuthService,
                private _fb: FormBuilder) {
    }

    ngOnInit() {

        this.RegisterForm = this._fb.group({
            username: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            first_name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            last_name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)])
        })

        console.log(this.RegisterForm);
    }


    register(details, isValid) {

        var self = this;

        this.submitted = true;

        this._authService.register(details, (err) => {

            if (err) if (err) self.error = err.message;

        });
    }


}
