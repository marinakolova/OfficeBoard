import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesBoardComponent } from './messages-board/messages-board.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    MessagesBoardComponent,
    MessageCreateComponent,
    MessageEditComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    CKEditorModule,
  ],
})
export class MessagesModule { }
