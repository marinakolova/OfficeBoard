import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import {
  faLaughWink,
  faList,
  faPlusCircle,
  faSignInAlt,
  faUserPlus,
  faUser,
  faUserEdit,
  faSignOutAlt,
  faTachometerAlt,
  faTasks,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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
  faUserEdit = faUserEdit;
  faSignOutAlt = faSignOutAlt;
  faTachometerAlt = faTachometerAlt;
  faTasks = faTasks;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  toggled = false;

  onToggle() {
    this.toggled = !this.toggled;
  }

  constructor(private authService: AuthService, private router: Router) { }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }

  confirmLogout() {
    if (confirm("Logout?")) {
      this.logout();
    }
  }

}
