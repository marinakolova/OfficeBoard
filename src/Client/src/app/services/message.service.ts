import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  
  private messagesPath = environment.apiUrl + 'messages';
    
  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(this.messagesPath, data);
  }

  getAllMessages(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(this.messagesPath);
  }

  getMessagesByUser(username: string): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(this.messagesPath + `/user/${username}`);
  }

  getMessageDetails(id: number): Observable<Message> {
    return this.http.get<Message>(this.messagesPath + `/${id}`);
  }

  editMessage(data: any) {
    return this.http.put(this.messagesPath, data);
  }

  deleteMessage(id: number) {
    return this.http.delete(this.messagesPath + `/${id}`);
  }  
  
}
