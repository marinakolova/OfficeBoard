import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginPath = environment.apiUrl + 'identity/login';
  private registerPath = environment.apiUrl + 'identity/register';
  private currentUserPath = environment.apiUrl + 'identity/currentUser';

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(this.loginPath, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(this.registerPath, data);
  }

  saveToken(token: any) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(this.currentUserPath);
  }

  logout() {
    if (this.isAuthenticated()) {
      localStorage.removeItem('token');
    }
  }
  
}
