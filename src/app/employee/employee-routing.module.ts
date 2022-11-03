import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '', component: EmployeeComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'list'
    },
    {
      path: 'form',
      component: FormComponent
    },
    {
      path: 'list',
      component: ListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
