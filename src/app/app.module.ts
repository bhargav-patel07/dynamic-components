import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './employee/services/user.service';
import { EmployeeResolver } from './employee/resolver/employee.resolver';
import { EmployeeModule } from './employee/employee.module';
import { ShareModule } from './share/share.module';
import { FeatureModule } from './feature/feature.module';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { EmployeeAdapter } from './employee/adapter/employee.adapter';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    EmployeeModule,
    ShareModule,
    FeatureModule,
    HttpClientModule,
    OverlayModule
  ],
  providers: [
    UserService,
    EmployeeResolver, EmployeeAdapter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
