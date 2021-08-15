import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksPath = environment.apiUrl + 'tasks';
    
  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data: any): Observable<any> {
    return this.http.post(this.tasksPath, data);
  }

  getAllTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.tasksPath);
  }

  //getTasksByUser(username: string): Observable<Array<Task>> {
  //  return this.http.get<Array<Task>>(this.tasksPath + `/user/${username}`);
  //}

  getTaskDetails(id: number): Observable<Task> {
    return this.http.get<Task>(this.tasksPath + `/${id}`);
  }

  editTask(data: any) {
    return this.http.put(this.tasksPath, data);
  }

  changeStatus(data: any) {
    return this.http.patch(this.tasksPath, data);
  }

  deleteTask(id: number) {
    return this.http.delete(this.tasksPath + `/${id}`);
  }

}
