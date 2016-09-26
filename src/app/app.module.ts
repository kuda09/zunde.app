import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {BusinessLoansComponent} from './business-loans/business-loans.component';
import {WhyUsComponent} from './why-us/why-us.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {PartnerWithUsComponent} from './partner-with-us/partner-with-us.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {RegisterComponent} from './register/register.component';
import {routing, appRoutingProviders} from "./app.routing";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';


@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        BusinessLoansComponent,
        WhyUsComponent,
        AboutUsComponent,
        PartnerWithUsComponent,
        SignInComponent,
        RegisterComponent,
        HomeComponent,
        FooterComponent,
        ApplyNowComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
