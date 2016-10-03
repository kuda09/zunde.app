import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BusinessLoansComponent} from "./components/business/business-loans/business-loans.component";
import {AboutUsComponent} from "./components/business/about-us/about-us.component";
import {PartnerWithUsComponent} from "./components/business/partner-with-us/partner-with-us.component";
import {BusinessRegisterComponent} from "./components/business/register/register.component";
import {SignInComponent} from "./components/business/sign-in/sign-in.component";
import {WhyUsComponent} from "./components/business/why-us/why-us.component";
import {HomeComponent} from "./components/shared/home/home.component";
import {ApplyNowComponent} from "./components/business/apply-now/apply-now.component";
import {YourBusinessDetailsComponent} from "./components/business/your-business-details/your-business-details.component";
import {YourPersonalDetailsComponent} from "./components/business/your-personal-details/your-personal-details.component";
import {BankStatementsComponent} from "./components/business/bank-statements/bank-statements.component";
import {InvestorsComponent} from "./components/investors/investors/investors.component";
import {AuthGuardService} from "./guards/auth-guard.service";
import {ProfileComponent} from "./components/business/profile/profile.component";

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
    path: 'business/register',
    component: BusinessRegisterComponent
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
    path: 'investors',
    component: InvestorsComponent
  },
  {
    path: 'business/profile',
    component: ProfileComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
