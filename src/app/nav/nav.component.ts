import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private service: EmployeeService, private router:Router){}
  // log():boolean{

  //   if(this.service.isLoggedIn()){

  //     return true;

 

  //   }else{

  //   return false;

  //   }

  // }
  logOut(){

    this.service.signout();
    this.router.navigate(['/login'])
  }
    
}
