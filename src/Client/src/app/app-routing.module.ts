import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepostComponent } from './createpost/createpost.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create', component: CreatepostComponent, canActivate: [AuthGuardService] },
  { path: 'messages', component: ListMessagesComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
