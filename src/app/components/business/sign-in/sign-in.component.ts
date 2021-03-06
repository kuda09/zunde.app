import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from "../../../services/auth.service";
import {ModalModule} from "ng2-bootstrap/components/modal";

import {SignInModel} from '../../../models/sign-in';


@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    providers: [AuthService]
})
export class SignInComponent implements OnInit {
    error: string;

    public SignInForm: FormGroup;
    public ForgotPasswordForm: FormGroup;

    constructor(private router: Router,
                private authService: AuthService,
                private _fb: FormBuilder) {
    }

    ngOnInit() {

        this.SignInForm = new FormGroup({
            username: new FormControl('', [<any>Validators.required, <any>Validators.minLength(3)]),
            password: new FormControl('', [<any>Validators.required, <any>Validators.minLength(3)])
        });


        this.ForgotPasswordForm = this._fb.group({
            username: ['', [Validators.required, Validators.minLength(5)]]
        })

    }

    login(model: SignInModel, isValid: boolean) {

        var self = this;
        if (isValid) {

            this.authService.login(model)
                .subscribe(
                    (data) => {

                        console.log(data);

                        //noinspection TypeScriptUnresolvedVariable
                      this.authService.saveToken(data.token);
                        //noinspection TypeScriptUnresolvedVariable
                      this.authService.saveProfile(data.data);
                        this.router.navigate(['/business/profile']);
                    },
                    () => {

                        self.error = 'Incorrect Username or Password';
                    })
        }

    }

    forgotPassword(model, isValid: boolean) {

        var self = this;

        console.log(model);


    }

    goToRegisterView() {

        this.router.navigate(['/business/register']);
    }

}
