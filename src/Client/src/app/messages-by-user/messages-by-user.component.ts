import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../models/Message';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { 
  faInfo,
  faEdit,
  faTrash, 
  faList,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages-by-user',
  templateUrl: './messages-by-user.component.html',
  styleUrls: ['./messages-by-user.component.css']
})
export class MessagesByUserComponent implements OnInit {
  faInfo = faInfo;
  faEdit = faEdit;
  faTrash = faTrash;
  faList = faList;
  faArrowDown = faArrowDown;

  show = 3;

  userId!: string;
  messages: Array<Message>;

  constructor(
    private messageService: MessageService, 
    private authService: AuthService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { 
    this.messages = new Array<Message>();
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.route.params.subscribe(res => {
      this.userId = res['id'];
      this.messageService.getMessagesByUser(this.userId).subscribe(res => {
        this.messages = res;
      });
    });
  }

  getUserId() {
    return this.authService.getUserId();
  }

  editMessage(id: number) {
    this.router.navigate([`messages/${id}/edit`]);
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(res => {
      this.fetchData();
    });
  }

  confirmDelete(name: string, id: number) {
    if(confirm(`${name} - Delete message?`)) {
      this.deleteMessage(id);
    }
  }

}
