import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskCommentCreateComponent } from './task-comment-create/task-comment-create.component';
import { TaskCommentEditComponent } from './task-comment-edit/task-comment-edit.component';


@NgModule({
  declarations: [
    TasksBoardComponent,
    TaskCreateComponent,
    TaskEditComponent,
    TaskDetailsComponent,
    TaskCommentCreateComponent,
    TaskCommentEditComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class TasksModule { }
