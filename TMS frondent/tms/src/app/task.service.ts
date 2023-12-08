import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  URL = "http://localhost:8081/task";

  constructor(private http: HttpClient) { }

  addTasksToProjects(projectId: number, taskData: any): Observable<any> {
    return this.http.post(`${this.URL}/${projectId}/tasks`, taskData);
  }

  fetchTasksByProjectId(projectId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/${projectId}/tasks`);
  }

  deleteTaskById(Id: number): Observable<any[]> {
    return this.http.delete<any[]>(`${this.URL}/${Id}`);
  }
}
