import {FileSelectDirective} from "ng2-file-upload";
declare const require: any;

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

// used to create fake backend
import {MockBackend, MockConnection} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';

import {AUTH_PROVIDERS} from 'angular2-jwt';

import {AppComponent} from './app.component';
import {MenuComponent} from './components/shared/menu/menu.component';
import {BusinessLoansComponent} from './components/business/business-loans/business-loans.component';
import {WhyUsComponent} from './components/business/why-us/why-us.component';
import {AboutUsComponent} from './components/business/about-us/about-us.component';
import {PartnerWithUsComponent} from './components/business/partner-with-us/partner-with-us.component';
import {SignInComponent} from './components/business/sign-in/sign-in.component';
import {BusinessRegisterComponent} from './components/business/register/register.component';
import {routing, appRoutingProviders} from "./app.routing";
import {HomeComponent} from './components/shared/home/home.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {ApplyNowComponent} from './components/business/apply-now/apply-now.component';
import {YourBusinessDetailsComponent} from './components/business/your-business-details/your-business-details.component';
import {YourPersonalDetailsComponent} from './components/business/your-personal-details/your-personal-details.component';
import {BankStatementsComponent} from './components/business/bank-statements/bank-statements.component';
import {InvestorsComponent} from './components/investors/investors/investors.component';
import {AuthGuardService} from "./guards/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {UserService} from "./services/user.service";
import {Ng2BootstrapModule} from "ng2-bootstrap";
import {ModalModule} from "ng2-modal";
import {ProfileComponent} from "./components/business/profile/profile.component";
import {ApplyNowService} from "./services/apply-now.service";
import {ProfileResolver} from "./resolvers/profile.resolver";
import {EditprofileComponent} from './components/business/editprofile/editprofile.component';
import {HelpComponent} from './components/business/help/help.component';
import {EqualValidator} from "./directives/passwordConfirmValidator";
import {EmailValidator} from "./directives/emailValidation";
import {HttpService} from "./services/http.service";
import {UtilsService} from "./services/utils.service";

const config = {
  apiKey: "AIzaSyAFne6CyxB305-nFXeQtdLzRkWVIQ0tb6A",
  authDomain: "zunde-cdf89.firebaseapp.com",
  databaseURL: "https://zunde-cdf89.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "704878924305"
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BusinessLoansComponent,
    WhyUsComponent,
    AboutUsComponent,
    PartnerWithUsComponent,
    SignInComponent,
    BusinessRegisterComponent,
    HomeComponent,
    FooterComponent,
    ApplyNowComponent,
    YourBusinessDetailsComponent,
    YourPersonalDetailsComponent,
    BankStatementsComponent,
    InvestorsComponent,
    ProfileComponent,
    EditprofileComponent,
    HelpComponent,
    EqualValidator,
    FileSelectDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2BootstrapModule,
    ModalModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    AuthGuardService,
    AuthService,
    UserService,
    ProfileResolver,
    MockBackend,
    UtilsService,
    BaseRequestOptions,
    ApplyNowService,
    HttpService,
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
/*todo */

//we need mask js
//sentry js a library to help you spot errors
//link business accounts
