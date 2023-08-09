import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // public employee:any;

  // constructor(private authservice:EmployeeService,private route:Router){}
  // ngOnInit():void{
  //   this.getEmployee();
  // }
  
  // private getEmployee(){
  //   this.authservice.getEmpDetail().subscribe(result=>{
      
  //     this.employee=result;
  //     console.log(this.employee);
  //   })
  // }
  
  // deleteEmployee(id:any){
  //   this.authservice.deleteEmployee(id).subscribe(result=>{
  //     console.log(result,"Data has been removed")
  //     this.route.navigate(['/dashboard']);
  //   },
  //   error => {
  //     console.log(error);
  //   });
  // }
  
  rowData$!: Observable<any[]>;

  colDefs: ColDef[]=[
    //{field:'id'},

    {field:'name',checkboxSelection: true, headerCheckboxSelection: true},

    {field:'designation'},

    {field:'dateOfJoining'},

    {field:'contact'},

    {field:'address'},

    {field:'skills'},

    {field:'age'},

    
  ];

  defaultColDef: ColDef={

    sortable:true, filter:true

  }

  constructor(private http: HttpClient){}

 

 ngOnInit(){

  this.rowData$=this.http.get<any[]>('https://localhost:7175/api/EmpDetail')

 }
}
