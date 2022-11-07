import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { user } from 'src/app/Users.model';
import { identifierName } from '@angular/compiler';

@Injectable()
export class UserService {
  [x: string]: any;
  updateCompany(arg0: number, value: any) {
    throw new Error('Method not implemented.');
  }
  public baseUrl: any

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }
  // get function
  getEmployee(): Observable<user[]> {
    const url: string = this.baseUrl + 'employee';
    return this.http.get<user[]>(url);
  }



  // add
  addEmployee(employee: user): Observable<user> {
    const url = this.baseUrl + 'employee';
    return this.http.post<user>(url, employee);
  }
  // Delete Method
  deleteEmployee(id: number): Observable<user> {
    const url = this.baseUrl + 'employee/' + id;
    return this.http.delete<user>(url);
  }
  //  update data
  updateEmployee(id: number, data: user): Observable<user> {
    const url = this.baseUrl + 'employee/' + id;
    return this.http.put<user>(url, data);
  }

  // get data by id
  getDataById(id: number): Observable<user> {
    const url = this.baseUrl + 'employee/' + id;
    return this.http.get<user>(url);
  }
  // 
  removeAt(id: number) {
    const url: string = this.baseUrl + 'employee/' + id;
    return this.http.delete(url);
  }
}

