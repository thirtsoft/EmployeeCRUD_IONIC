import { Employee } from './../Employee/Employee.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  URL = 'http://localhost:9091/employees';

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<HttpResponse<Employee[]>> {
    return this.http.get<Employee[]>(this.URL, {observe: 'response'});
  }

  getEmployeeById(id: string): Observable<HttpResponse<Employee>> {
    return this.http.get<Employee>(this.URL + '/' + id, {observe: 'response'});
  }

  addEmployee(emp: Employee): Observable<HttpResponse<Employee>> {
    return this.http.post<Employee>(this.URL, emp, {observe: 'response'});
  }

  updateEmployee(emp: Employee): Observable<HttpResponse<Employee>> {
    console.log('inside Service updating details');
    return this.http.put<Employee>(this.URL + '/' + emp.empId, emp, {observe: 'response'});
  }

  deleteEmployee(id: string): Observable<HttpResponse<void>> {
    return this.http.delete<void>(this.URL + '/' + id,  {observe: 'response'});
  }

}
