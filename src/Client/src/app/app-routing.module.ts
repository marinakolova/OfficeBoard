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
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskCreateComponent } from './task-create/task-create.component';

const routes: Routes = [  
  { path: '', component: DashboardComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'tasks', component: TasksBoardComponent, canActivate: [AuthGuardService] },
  { path: 'tasks/create', component: TaskCreateComponent, canActivate: [AuthGuardService] },
  { path: 'tasks/:id', component: TaskDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'tasks/:id/edit', component: TaskEditComponent, canActivate: [AuthGuardService] },

  { path: 'messages', component: ListMessagesComponent, canActivate: [AuthGuardService] },
  { path: 'messages/create', component: CreatepostComponent, canActivate: [AuthGuardService] },
  { path: 'messages/:id', component: DetailsMessageComponent, canActivate: [AuthGuardService] },
  { path: 'messages/:id/edit', component: EditMessageComponent, canActivate: [AuthGuardService] },
  { path: 'messages/user/:id', component: ListMessagesByUserComponent, canActivate: [AuthGuardService] },

  { path: 'profile/messages', component: ProfileMessagesComponent, canActivate: [AuthGuardService] },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
