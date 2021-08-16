import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../models/Message';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { 
  faInfo,
  faEdit,
  faTrash, 
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages-board',
  templateUrl: './messages-board.component.html',
  styleUrls: ['./messages-board.component.css']
})
export class MessagesBoardComponent implements OnInit {
  faInfo = faInfo;
  faEdit = faEdit;
  faTrash = faTrash;
  faArrowDown = faArrowDown;

  show = 4;

  messages: Array<Message>;

  constructor(
    private messageService: MessageService, 
    private authService: AuthService, 
    private router: Router
    ) {
    this.messages = new Array<Message>();
  }

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages() {
    this.messageService.getAllMessages().subscribe(messages => {
      this.messages = messages;
    })
  }

  getUserId() {
    return this.authService.getUserId();
  }

  editMessage(id: number) {
    this.router.navigate([`messages/${id}/edit`]);
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(res => {
      this.fetchMessages();
    });
  }

  confirmDelete(name: string, id: number) {
    if(confirm(`${name} - Delete message?`)) {
      this.deleteMessage(id);
    }
  }

}
