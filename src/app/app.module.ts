import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeDetailComponent } from './dashboard/employee-detail/employee-detail.component';
import { UpdateEmployeeComponent } from './dashboard/update-employee/update-employee.component';
import { GetEmployeeComponent } from './dashboard/get-employee/get-employee.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ContactComponent,
    EmployeeDetailComponent,
    UpdateEmployeeComponent,
    GetEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
