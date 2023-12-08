import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  URL="http://localhost:8081/user";

  constructor(private http:HttpClient) { }

  fnSignUp(ar:any)
  {
    return this.http.post(this.URL,ar);
  }

  getUsersByRole(role: string): Observable<User[]> {
    const url = `${this.URL+'/'+'role'}?role=${role}`;
    return this.http.get<User[]>(url);
  }
}
