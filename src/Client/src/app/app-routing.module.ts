import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { MessagesBoardComponent } from './messages-board/messages-board.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileByUserComponent } from './profile-by-user/profile-by-user.component';

const routes: Routes = [  
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileEditComponent, canActivate: [AuthGuardService] },
  { path: 'user/:id', component: ProfileByUserComponent, canActivate: [AuthGuardService] },

  { path: 'messages', component: MessagesBoardComponent, canActivate: [AuthGuardService] },
  { path: 'messages/create', component: MessageCreateComponent, canActivate: [AuthGuardService] },
  { path: 'messages/:id/edit', component: MessageEditComponent, canActivate: [AuthGuardService] }, 
  
  { path: 'tasks', component: TasksBoardComponent, canActivate: [AuthGuardService] },
  { path: 'tasks/create', component: TaskCreateComponent, canActivate: [AuthGuardService] },
  { path: 'tasks/:id', component: TaskDetailsComponent, canActivate: [AuthGuardService] },
  { path: 'tasks/:id/edit', component: TaskEditComponent, canActivate: [AuthGuardService] },

  { path: 'comments/:id/edit', component: CommentEditComponent, canActivate: [AuthGuardService] },
  
  {path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
