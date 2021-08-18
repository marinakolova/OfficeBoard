import { Component, OnInit } from '@angular/core';
import {
  faUserTag,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Profile } from '../../models/Profile';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  faUserTag = faUserTag;
  faUserEdit = faUserEdit;

  userId!: string;
  profile!: Profile;
  currentUser!: User;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
  ) {
    this.authService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.profileService.getProfileOfCurrentUser().subscribe(res => {
      this.profile = res;
    });
  }

}
