import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { DilogBoxService } from './services/dilog-box.service';
import { DataCommunicationService } from './dataCommmunication/data-communication.service';
import { ShareModule } from '../share/share.module';
import { NumbersMaskingDirective } from './directives/numbers-masking.directive';
import { EmployeeAdapter } from './adapter/employee.adapter';


@NgModule({
  declarations: [
    EmployeeComponent,
    ListComponent,
    FormComponent,
    NumbersMaskingDirective
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ShareModule,
    OverlayModule
  ],
  exports: [
    EmployeeComponent,
    ListComponent,
    FormComponent
  ],
  providers: [
    UserService,
    DilogBoxService,
    DataCommunicationService,
    EmployeeAdapter
  ]
})
export class EmployeeModule { }
