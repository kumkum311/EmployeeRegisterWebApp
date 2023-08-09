import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';
import { EmployeeDetailComponent } from './dashboard/employee-detail/employee-detail.component';
import { UpdateEmployeeComponent } from './dashboard/update-employee/update-employee.component';


const routes: Routes = [
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'register/login/register',component: RegisterComponent},
  {path:'register/login',component:LoginComponent },
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'contact', component:ContactComponent, canActivate:[AuthGuard]},
  {path:'dashboard/employee-detail',component:EmployeeDetailComponent},
  {path:'dashboard/update-employee',component:UpdateEmployeeComponent},
  {path:'dashboard/update-employee/:id',component:UpdateEmployeeComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
