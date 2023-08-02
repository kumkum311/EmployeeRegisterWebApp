import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';



 

@Injectable({

  providedIn: 'root'

})

export class AuthGuard implements CanActivate {

  constructor(private auth:EmployeeService, private router:Router){

 

  }

  canActivate():boolean{

    if(this.auth.isLoggedIn()){

      return true;

 

    }else{

    this.router.navigate(['login'])

    return false;

    }

  }

}