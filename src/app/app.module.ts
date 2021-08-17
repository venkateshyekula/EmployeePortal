import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { AddeditdepComponent } from './department/addeditdep/addeditdep.component';
import { ShowdepComponent } from './department/showdep/showdep.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddeditempComponent } from './employee/addeditemp/addeditemp.component';
import { ShowempComponent } from './employee/showemp/showemp.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AddeditdepComponent,
    ShowdepComponent,
    EmployeeComponent,
    AddeditempComponent,
    ShowempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
