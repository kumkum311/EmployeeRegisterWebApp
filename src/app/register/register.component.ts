import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public employeeForm: FormGroup|any;

  constructor(private formBuilder: FormBuilder,private route:Router, private service: EmployeeService) {}
  
  ngOnInit(): void {
    this.init();
  }

  public registerEmployee():void{
    this.service.addEmpRegister(this.employeeForm.value).subscribe(result=>{
      console.log(result);
      this.employeeForm.reset();
      alert(`New Employee has been registered`);
      console.log(this.employeeForm.value);
      this.route.navigate(['register/login']);
    },
    (error) => {
      // Error callback
      console.error("Error occurred:", error);
      // Handle the error, show appropriate messages, or perform necessary actions
    }

    );
  }

private init(): void{
  this.employeeForm=new FormGroup({
    name: new FormControl("",[Validators.required]),
    userName: new FormControl("",[Validators.required]),
    dateOfBirth:new FormControl("",[Validators.required]),
    gender:new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    department:new FormControl("",[Validators.required]),
    experience:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
  });
}
}
