import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL='http://localhost:8081/user'
  private uidSource = new BehaviorSubject<number>(0);
  currentUid = this.uidSource.asObservable();

  constructor(private http:HttpClient) { }

  changeUid(uid: number) {
    this.uidSource.next(uid);
  }

  addProjectToTheUser(uid: number, pid: number): Observable<any> {
    const url = `${this.URL}/${uid}/projects/${pid}`;

    // Send a POST request to add the project to the user
    return this.http.post(url, {});
  }
}
