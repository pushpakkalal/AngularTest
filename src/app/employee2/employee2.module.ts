import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Employee2RoutingModule } from './employee2-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { Employee2Component } from './employee2.component';
import { EmployeeService } from './employee.service';
@NgModule({
  declarations: [Employee2Component],
  imports: [
    CommonModule,
    Employee2RoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
})
export class Employee2Module { }
