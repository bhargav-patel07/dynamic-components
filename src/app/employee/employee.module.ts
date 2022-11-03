import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { DilogBoxService } from './services/dilog-box.service';


@NgModule({
  declarations: [
    EmployeeComponent,
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OverlayModule
  ],
  exports: [
    EmployeeComponent,
    ListComponent,
    FormComponent
  ],
  providers: [
    UserService,
    DilogBoxService
  ]
})
export class EmployeeModule { }
