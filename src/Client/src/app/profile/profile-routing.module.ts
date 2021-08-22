import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileByUserComponent } from './profile-by-user/profile-by-user.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'edit',
    pathMatch: 'full',
  },
  {
    path: 'edit', 
    component: ProfileEditComponent,
  },
  {
    path: 'user/:id', 
    component: ProfileByUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
