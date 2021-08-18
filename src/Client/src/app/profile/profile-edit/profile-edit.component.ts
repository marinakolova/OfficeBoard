import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faUserEdit,
  faSave,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Profile } from '../../models/Profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  faUserEdit = faUserEdit;
  faSave = faSave;
  faEye = faEye;

  profile!: Profile;
  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.profileService.getProfileOfCurrentUser().subscribe(res => {
      this.profile = res;

      this.profileForm = this.fb.group({
        'Email': [this.profile.email, Validators.required],
        'UserName': [this.profile.userName, Validators.required],
        'Name': [this.profile.name],
        'Position': [this.profile.position],
        'Department': [this.profile.department],
        'UserId': [this.profile.userId],
      });
    });
  }

  editProfile() {
    this.profileService.editProfile(this.profileForm.value).subscribe(res => {
      this.router.navigate([`/profile/info`]);
    });
  }

  confirmEdit() {
    if (confirm("Save changes?")) {
      this.editProfile();
    }
  }

  get email() {
    return this.profileForm.get('Email');
  }

  get userName() {
    return this.profileForm.get('UserName');
  }

}
