import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private commentsPath = environment.apiUrl + 'comments';
    
  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(this.commentsPath, data);
  }

  getCommentsByTask(taskId: number): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(this.commentsPath + `/byTask/${taskId}`);
  }

  getCommentDetails(id: number): Observable<Comment> {
    return this.http.get<Comment>(this.commentsPath + `/${id}`);
  }

  editComment(data: any) {
    return this.http.put(this.commentsPath, data);
  }

  deleteComment(id: number) {
    return this.http.delete(this.commentsPath + `/${id}`);
  }

}
