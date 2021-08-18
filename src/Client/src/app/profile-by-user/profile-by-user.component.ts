import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../models/Profile';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import {
  faUserTag,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/User';

@Component({
  selector: 'app-profile-by-user',
  templateUrl: './profile-by-user.component.html',
  styleUrls: ['./profile-by-user.component.css']
})
export class ProfileByUserComponent implements OnInit {
  faUserTag = faUserTag;
  faUserEdit = faUserEdit;

  userId!: string;
  profile!: Profile;
  currentUser!: User;

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {
    this.authService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.route.params.subscribe(res => {
      this.userId = res['id'];
      this.profileService.getProfileDetails(this.userId).subscribe(res => {
        this.profile = res;
      });
    });
  }

}
