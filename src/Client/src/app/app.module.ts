import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { AuthGuardService } from './services/auth-guard.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskService } from './services/task.service';
import { CommentService } from './services/comment.service';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { MessagesBoardComponent } from './messages-board/messages-board.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { MessagesByUserComponent } from './messages-by-user/messages-by-user.component';
import { DashboardService } from './services/dashboard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommentsByTaskComponent } from './comments-by-task/comments-by-task.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { CommentEditComponent } from './comment-edit/comment-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileService } from './services/profile.service';
import { ProfileByUserComponent } from './profile-by-user/profile-by-user.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,    
    DashboardComponent,
    TasksBoardComponent,
    TaskCreateComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    MessagesBoardComponent,
    MessageCreateComponent,
    MessageEditComponent,
    MessagesByUserComponent,
    NotFoundComponent,
    CommentsByTaskComponent,
    CommentCreateComponent,
    CommentEditComponent,
    ProfileByUserComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [
    AuthService, 
    MessageService, 
    TaskService,
    CommentService,
    DashboardService,
    ProfileService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
