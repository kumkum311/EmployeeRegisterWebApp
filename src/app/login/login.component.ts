import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route:Router, private service: EmployeeService) {}
  loginForm=new FormGroup({
        userName: new FormControl("",[Validators.required]),
        password:new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(15)])
      });
    
  
  
  
  public loginEmployee():void{
    this.service.checkData(this.loginForm.value).subscribe((res:any)=>{
      
      const person =res.find((a:any)=>{
        // console.log(a)
        return a.userName === this.loginForm.value.userName && a.password ===this.loginForm.value.password

      })
      if(person){

        this.service.addEmpLogin(this.loginForm.value).subscribe((result:any)=>{

          localStorage.setItem("token",result.token);

          localStorage.setItem("user",result.user);

          console.log(result);

          this.loginForm.reset();

        }

        );

        alert('login succesful');

        this.loginForm.reset();
        this.route.navigate(['home']);

       

      }

      else{

        alert('user not found');

      }

    }

    );

   

  }

 

  
  
}
