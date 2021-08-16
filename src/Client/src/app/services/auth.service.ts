import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + 'identity/login';
  private registerPath = environment.apiUrl + 'identity/register';

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(this.loginPath, data)
  }

  register(data: any): Observable<any> {
    return this.http.post(this.registerPath, data)
  }

  saveToken(token: any) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  saveUserId(userId: string) {
    localStorage.setItem('userId', userId);
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  saveUsername(username: string) {
    localStorage.setItem('username', username);
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  isAuthenticated() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  logout() {
    if (this.isAuthenticated()) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    }
  }
  
}
