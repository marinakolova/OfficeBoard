import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PreventLoggedInAccessService } from './services/prevent-logged-in-access.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'auth',
    canActivate: [PreventLoggedInAccessService],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'messages',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule),
  },
  {
    path: 'tasks',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
