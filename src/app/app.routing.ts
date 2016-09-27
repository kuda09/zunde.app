import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessLoansComponent} from "./business-loans/business-loans.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {PartnerWithUsComponent} from "./partner-with-us/partner-with-us.component";
import {RegisterComponent} from "./register/register.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {WhyUsComponent} from "./why-us/why-us.component";
import {HomeComponent} from "./home/home.component";
import {ApplyNowComponent} from "./apply-now/apply-now.component";
import {YourBusinessDetailsComponent} from "./your-business-details/your-business-details.component";
import {YourPersonalDetailsComponent} from "./your-personal-details/your-personal-details.component";
import {BankStatementsComponent} from "./bank-statements/bank-statements.component";

const appRoutes: Routes = [
    {
        path: 'business-loans',
        component: BusinessLoansComponent,
        data: {
            title: 'Zunde - Business Loans'
        }
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'partner-with-us',
        component: PartnerWithUsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'sign-in',
        component: SignInComponent
    },
    {
        path: 'why-us',
        component: WhyUsComponent
    },
    {
        path: 'apply-now',
        component: ApplyNowComponent
    },
    {
        path: 'apply-now/your-business-details',
        component: YourBusinessDetailsComponent
    },
    {
        path: 'apply-now/your-personal-details',
        component: YourPersonalDetailsComponent
    },
    {
        path: 'apply-now/bank-statements',
        component: BankStatementsComponent
    },
    {
        path: '',
        component: HomeComponent
    },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
