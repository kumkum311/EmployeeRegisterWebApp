import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private basePath='https://localhost:7175/api/';
  constructor(private http: HttpClient) { }

  public addEmpRegister(employee:any): Observable<any>{
    return this.http.post(this.basePath +"EmpRegister",employee);
  }

  public checkData(employee:any){
    return this.http.get(this.basePath+"EmpRegister")
  }

  public addEmpLogin(employee:any): Observable<any>{
    return this.http.post(this.basePath +"EmpLogin",employee);
  }
  isLoggedIn():boolean{

    return !!localStorage.getItem('token');

 

  }

  

  

}
