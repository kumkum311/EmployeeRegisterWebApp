import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridApi, GridReadyEvent,RowSelectedEvent, SelectionChangedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import{IemployeeData} from '../dashboard/interface'



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
  
  deleteEmployee(id:any){
    this.authservice.deleteEmployee(id).subscribe(result=>{
      console.log(result,"Data has been removed")
      this.route.navigate(['/dashboard']);
    },
    error => {
      console.log(error);
    });
  }
  //private gridApi!: GridApi<ColDef[]>;
  private gridApi!: GridApi<IemployeeData>;
  public guidId:any;
  
  //rowData$!: Observable<any[]>;

  colDefs: ColDef[]=[
    {field:'id'},
    {field:'name',checkboxSelection: false, headerCheckboxSelection: false},
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
  public rowSelection: 'single' | 'multiple' = 'single';
  public rowData!: IemployeeData[];
  constructor(private http: HttpClient,private authservice:EmployeeService,private route:Router){}
//   ngOnInit(){
//      this.rowData$=this.http.get<any[]>('https://localhost:7175/api/EmpDetail')
//  }
 

onSelectionChanged(event: SelectionChangedEvent) {
  const selectedRows = this.gridApi.getSelectedRows();
  this.guidId=(document.querySelector('#selectedRows') as any).innerHTML =
    selectedRows.length === 1 ? selectedRows[0].id: '';
    console.log(this.guidId);
}
onGridReady(params: GridReadyEvent<IemployeeData>) {
  this.gridApi = params.api;
  this.http.get<IemployeeData[]>('https://localhost:7175/api/EmpDetail')
    .subscribe((data) => (this.rowData = data));
}
}