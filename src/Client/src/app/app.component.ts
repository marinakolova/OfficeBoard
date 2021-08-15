import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { 
  faLaughWink, 
  faList, 
  faPlusCircle, 
  faSignInAlt, 
  faUserPlus, 
  faUser, 
  faSignOutAlt } 
  from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'office-board';
  faLaughWink = faLaughWink;
  faList = faList;
  faPlusCircle = faPlusCircle;
  faSignInAlt = faSignInAlt;
  faUserPlus = faUserPlus;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;

  constructor(private authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
