import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messagePath = environment.apiUrl + 'messages';
    
  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.authService.getToken()}`);
    
    return this.http.post(this.messagePath, data, {headers});
  }
}
