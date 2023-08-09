import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {
  public employees:any
  constructor(private authservice:EmployeeService, private route:Router,private http:HttpClient){}
  ngOnInit(){}
  getEmployee():void{
    this.authservice.getEmpDetail().subscribe(result=>{
      this.employees=result;
    });
  }
}
