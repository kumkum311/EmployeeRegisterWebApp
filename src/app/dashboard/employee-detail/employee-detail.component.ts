import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  constructor(private authservice:EmployeeService, private route:Router,private http:HttpClient){}
  ngOnInit():void{}
  
  employeeDetailForm=new FormGroup({

    name: new FormControl("",[Validators.required]),
    designation: new FormControl("",[Validators.required]),
    dateOfJoining: new FormControl("",[Validators.required]),
    contact: new FormControl("",[Validators.required]),
    address: new FormControl("",[Validators.required]),
    skills: new FormControl("",[Validators.required]),
    age: new FormControl("",[Validators.required]),
  });

  employeeSubmitted():void{

    this.authservice.savestudentDetails(this.employeeDetailForm.value).subscribe((result)=>{
      console.log(result);
      this.employeeDetailForm.reset();
      window.alert("Employee registered sucessfully");
    });
    console.log(this.employeeDetailForm.value);
  }
  
}
