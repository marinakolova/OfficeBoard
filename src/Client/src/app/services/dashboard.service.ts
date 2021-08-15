import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Dashboard } from '../models/Dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardPath = environment.apiUrl + 'dashboard';
    
  constructor(private http: HttpClient) { }

  getModel(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.dashboardPath);
  }
}
