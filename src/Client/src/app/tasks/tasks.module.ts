import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskCommentCreateComponent } from './task-comment-create/task-comment-create.component';
import { TaskCommentEditComponent } from './task-comment-edit/task-comment-edit.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


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
    NgbModule,
    DragDropModule,
    CKEditorModule,
  ]
})
export class TasksModule { }
