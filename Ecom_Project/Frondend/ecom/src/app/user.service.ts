import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL='http://localhost:8085/user';

  constructor(private http:HttpClient) { }

  fnSignUp(ar:any)
  {
    return this.http.post(this.URL,ar);
  }

  fnPasswordReset(ar:any)
  {
    return this.http.put
  }
}
