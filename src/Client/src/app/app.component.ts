import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { 
  faLaughWink, 
  faList, 
  faPlusCircle, 
  faSignInAlt, 
  faUserPlus, 
  faUser, 
  faSignOutAlt,
  faTachometerAlt,
  faTasks, 
  } 
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
  faTachometerAlt = faTachometerAlt;
  faTasks = faTasks;

  constructor(private authService: AuthService, private router: Router) { }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getUsername() {
    return this.authService.getUsername();
  }

  myMessages() {
    this.router.navigate([`/messages/user/${this.getUsername()}`]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

  confirmLogout() {
    if(confirm("Logout?")) {
      this.logout();
    }
  }

}
