import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faInfo,
  faEdit,
  faTrash,
  faSearch,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { Message } from '../../models/Message';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages-board',
  templateUrl: './messages-board.component.html',
  styleUrls: ['./messages-board.component.css']
})
export class MessagesBoardComponent implements OnInit {

  faInfo = faInfo;
  faEdit = faEdit;
  faTrash = faTrash;
  faSearch = faSearch;
  faArrowDown = faArrowDown;
  
  currentUser!: User;
  filterTerm!: string;

  messages: Array<Message>;
  show = 3;

  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) {
    this.messages = new Array<Message>();

    this.authService.getCurrentUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages() {
    this.messageService.getAllMessages().subscribe(messages => {
      this.messages = messages;
    })
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
    if (confirm(`${name} - Delete message?`)) {
      this.deleteMessage(id);
    }
  }

}
