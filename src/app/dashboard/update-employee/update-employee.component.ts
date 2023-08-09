import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import {  HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  constructor(private formBuilder:FormBuilder,private authservice:EmployeeService, private route:Router,private http:HttpClient, private router:ActivatedRoute){}
  public employee:any;
  public employeeDetailForm:any;
  id = this.router.snapshot.params['id'];
  
  // id = this.router.snapshot.params['id'].replace(/-/g, ''); 
  ngOnInit():void{this.init();}


  employeeUpdated(){
    const employee=JSON.stringify(this.employeeDetailForm.value);
    console.log(employee)
    var headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.authservice.editEmployee(this.id,employee).subscribe(result=>{
      console.log(result, "data updated successfully");
      alert("employee has been updated");
      // this.rout.navigate(['/books']);
      },
      error => {
        console.log(error);
      });
  }
  private init(): void{
    this.employeeDetailForm=new FormGroup({

      name: new FormControl("",[Validators.required]),
      designation: new FormControl("",[Validators.required]),
      dateOfJoining: new FormControl("",[Validators.required]),
      contact: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required]),
      skills: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required]),
    });

    this.authservice.getEmployeeById(this.id).subscribe(result=>{
      console.log(result);
      // this.employeeDetailForm=this.formBuilder.group({
      //   name: new FormControl(result['name']),
      //   designation: new FormControl(result['designation']),
      //   dateOfJoining: new FormControl(result['dateOfJoining']),
      //   contact: new FormControl(result['contact']),
      //   address: new FormControl(result['address']),
      //   skills: new FormControl(result['skills']),
      //   age: new FormControl(result['age']),
        
      // });
      this.employeeDetailForm.setValue({
        name: result['name'],
        designation: result['designation'],
        dateOfJoining: result['dateOfJoining'],
        contact: result['contact'],
        address: result['address'],
        skills: result['skills'],
        age: result['age'],
      });
      
    })
  }
  
}
