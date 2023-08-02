import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guard/auth.guard';
import { RoleGuard } from './guard/role.guard';

const routes: Routes = [
  {path:'register',component: RegisterComponent},
  {path:'register/login/register',component: RegisterComponent},
  {path:'register/login',component:LoginComponent },
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'contact', component:ContactComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
