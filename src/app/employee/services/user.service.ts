import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import{HttpClient} from '@angular/common/http'
import { user } from 'src/app/Users.model';
 
@Injectable()
export class UserService {
  public baseUrl: any

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }
  // get function
  getEmployee(): Observable<user[]> {
    const url: string = this.baseUrl + 'employee';
    return this.http.get<user[]>(url);
  }
}
