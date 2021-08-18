import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCommentEditComponent } from './task-comment-edit/task-comment-edit.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';

const routes: Routes = [
  {
    path: '',
    component: TasksBoardComponent
  },
  {
    path: 'create',
    component: TaskCreateComponent
  },
  {
    path: ':id',
    component: TaskDetailsComponent
  },
  {
    path: ':id/edit',
    component: TaskEditComponent
  },
  {
    path: 'comments/:id/edit',
    component: TaskCommentEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
