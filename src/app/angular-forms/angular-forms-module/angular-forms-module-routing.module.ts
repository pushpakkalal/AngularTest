import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsTypeComponent } from './forms-type/forms-type.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form.component';
const routes: Routes = [
    {
        path: '',
        component: FormsTypeComponent,
        children: [ 
            // {
            //     path: '',
            //     redirectTo: '/forms/template-driven-form',
            //     pathMatch: 'full'
            // },
            {
                path: 'template-driven-form',
                component: TemplateDrivenFormComponent
            },
            {
                path: 'reactiveForm',
                component: ReactiveFormComponent
            },
        ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularFormsModuleRoutingModule { }
