import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MenuComponent} from './components/shared/menu/menu.component';
import {BusinessLoansComponent} from './components/business/business-loans/business-loans.component';
import {WhyUsComponent} from './components/business/why-us/why-us.component';
import {AboutUsComponent} from './components/business/about-us/about-us.component';
import {PartnerWithUsComponent} from './components/business/partner-with-us/partner-with-us.component';
import {SignInComponent} from './components/business/sign-in/sign-in.component';
import {RegisterComponent} from './components/business/register/register.component';
import {routing, appRoutingProviders} from "./app.routing";
import { HomeComponent } from './components/shared/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ApplyNowComponent } from './components/business/apply-now/apply-now.component';
import { YourBusinessDetailsComponent } from './components/your-business-details/your-business-details.component';
import { YourPersonalDetailsComponent } from './components/your-personal-details/your-personal-details.component';
import { BankStatementsComponent } from './components/bank-statements/bank-statements.component';


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
        ApplyNowComponent,
        YourBusinessDetailsComponent,
        YourPersonalDetailsComponent,
        BankStatementsComponent
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
