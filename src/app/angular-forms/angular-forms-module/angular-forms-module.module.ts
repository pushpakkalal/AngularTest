import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFormsModuleRoutingModule } from './angular-forms-module-routing.module';
import { ForbiddenValidatorDirective } from '../../helper/forbidden-name.directive';
import { MustMatchDirective } from '../../helper/must-match.directive';
import { ReactiveFormComponent } from './reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { FormsTypeComponent } from './forms-type/forms-type.component';

@NgModule({
  declarations: [
    MustMatchDirective,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    ForbiddenValidatorDirective,
    FormsTypeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFormsModuleRoutingModule,
  ],
  exports: [
    AngularFormsModuleRoutingModule
  ]
})
export class AngularFormsModuleModule { }
