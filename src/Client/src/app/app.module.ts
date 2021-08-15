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
import { CreatepostComponent } from './createpost/createpost.component';
import { MessageService } from './services/message.service';
import { AuthGuardService } from './services/auth-guard.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { DetailsMessageComponent } from './details-message/details-message.component';
import { ListMessagesByUserComponent } from './list-messages-by-user/list-messages-by-user.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProfileMessagesComponent } from './profile-messages/profile-messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { CommentCreateComponent } from './comment-create/comment-create.component';
import { TaskService } from './services/task.service';
import { CommentService } from './services/comment.service';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreatepostComponent,
    ListMessagesComponent,
    ListMessagesByUserComponent,
    DetailsMessageComponent,
    EditMessageComponent,
    ProfileMessagesComponent,
    DashboardComponent,
    TasksBoardComponent,
    TaskCreateComponent,
    CommentCreateComponent,
    TaskDetailsComponent,
    TaskEditComponent    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService, 
    MessageService, 
    TaskService,
    CommentService,
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
