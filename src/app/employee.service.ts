import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private basePath='https://localhost:7175/api/';
  private basePath1='https://localhost:7175/api/EmpDetail';

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
  signout(){

    localStorage.clear();

  }

  savestudentDetails(data:any): Observable<any>{

    return this.http.post(this.basePath+'EmpDetail', data);
  }
   getEmpDetail():Observable<any>{
    return this.http.get(this.basePath+'EmpDetail');
  }
  
  public getEmployeeById(id:any): Observable<any>{
    return this.http.get(`${this.basePath1}/${id}`);
  }
  public deleteEmployee(id:any):Observable<any>{
    return this.http.delete(`${this.basePath1}/${id}`);
  }

  public editEmployee(id:any,employee:any):Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
   return this.http.put(`${this.basePath1}/${id}`,employee,{ headers });
  }

  

}
