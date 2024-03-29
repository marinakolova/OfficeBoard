import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  private profilePath = environment.apiUrl + 'profiles';
    
  constructor(private http: HttpClient) { }

  getProfileOfCurrentUser(): Observable<Profile> {
    return this.http.get<Profile>(this.profilePath + '/current');
  }

  getProfileDetails(id: string): Observable<Profile> {
    return this.http.get<Profile>(this.profilePath + `/${id}`);
  }

  editProfile(data: any) {
    return this.http.put(this.profilePath, data);
  }
  
}
