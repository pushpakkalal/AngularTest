import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFormsModuleModule } from './angular-forms/angular-forms-module/angular-forms-module.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './partial/navigation/navigation.component';
import { AboutUsComponent } from './cms/about-us/about-us.component';
import { PrivacyPolicyComponent } from './cms/privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './cms/terms-and-condition/terms-and-condition.component';
import { PageNotFoundComponent } from './partial/page-not-found/page-not-found.component';
import { WelcomeComponent } from './partial/welcome/welcome.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AboutUsComponent,
    PrivacyPolicyComponent,
    TermsAndConditionComponent,
    PageNotFoundComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFormsModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
