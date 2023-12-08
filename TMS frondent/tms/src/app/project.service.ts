import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  URL="http://localhost:8081/project"
  constructor(private http:HttpClient) { }

  fnAddProject(ar:any)
  {
    return this.http.post(this.URL,ar);
  }

  getAllProjects()
  {
    return this.http.get(this.URL);
  }

  fetchProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}`);
  }

  fnDeleteProject(id:number)
  {
    return this.http.delete(this.URL+'/'+id);
  }
}
