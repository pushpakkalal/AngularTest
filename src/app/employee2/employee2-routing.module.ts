import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Employee2Component } from './employee2.component';

const routes: Routes = [{ path: '', component: Employee2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Employee2RoutingModule { }
