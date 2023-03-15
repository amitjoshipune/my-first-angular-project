import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
baseApiUrl :string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<Employee[]> (this.baseApiUrl + '/api/employees');
  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees',
    addEmployeeRequest);
  }

  getEmployee(id :string):Observable<Employee>  {
    return this.http.get<Employee> (this.baseApiUrl + '/api/employees/' + id);
  }

 updateEmployee(id :string , updateEmployeeRequest : Employee):Observable<Employee>  {
    return this.http.put<Employee> (this.baseApiUrl + '/api/employees/' + id, updateEmployeeRequest);
  }

  deleteEmployee(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }

}
