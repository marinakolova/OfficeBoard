import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesBoardComponent } from './messages-board/messages-board.component';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';


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
  ],
})
export class MessagesModule { }
