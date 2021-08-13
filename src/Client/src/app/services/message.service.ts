import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagesPath = environment.apiUrl + 'messages';
    
  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data: any): Observable<any> {
    return this.http.post(this.messagesPath, data);
  }

  getAllMessages(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(this.messagesPath);
  }

  getMessagesByUser(userId: string): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(this.messagesPath + `/user/${userId}`);
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
