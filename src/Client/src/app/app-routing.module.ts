import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { DetailsMessageComponent } from './details-message/details-message.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { ListMessagesByUserComponent } from './list-messages-by-user/list-messages-by-user.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfileMessagesComponent } from './profile-messages/profile-messages.component';

const routes: Routes = [  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreatepostComponent, canActivate: [AuthGuardService] },
  { path: 'messages', component: ListMessagesComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/messages', pathMatch: 'full'},
  { path: 'messages/:id', component: DetailsMessageComponent, canActivate: [AuthGuardService] },
  { path: 'messages/:id/edit', component: EditMessageComponent, canActivate: [AuthGuardService] },
  { path: 'messages/user/:id', component: ListMessagesByUserComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileMessagesComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
