import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './cms/about-us/about-us.component';
import { PrivacyPolicyComponent } from './cms/privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './cms/terms-and-condition/terms-and-condition.component';
import { PageNotFoundComponent } from './partial/page-not-found/page-not-found.component';
import { WelcomeComponent } from './partial/welcome/welcome.component';

const routes: Routes = [
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'terms-and-conditions',
        component: TermsAndConditionComponent
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        data: { title: 'Heroes List' }
    },
    {
        path: '404',
        component: PageNotFoundComponent
    },
    {
        path: 'home',
        component: WelcomeComponent
    },
    { path: 'forms', loadChildren: () => import('./angular-forms/angular-forms-module/angular-forms-module.module').then(m => m.AngularFormsModuleModule) },
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path: '**', redirectTo: '/404', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
