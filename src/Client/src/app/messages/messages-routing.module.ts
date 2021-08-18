import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageCreateComponent } from './message-create/message-create.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { MessagesBoardComponent } from './messages-board/messages-board.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesBoardComponent
  },
  {
    path: 'create',
    component: MessageCreateComponent
  },
  {
    path: ':id/edit',
    component: MessageEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
