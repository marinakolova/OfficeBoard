import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../models/Message';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages-by-user',
  templateUrl: './messages-by-user.component.html',
  styleUrls: ['./messages-by-user.component.css']
})
export class MessagesByUserComponent implements OnInit {

  userId!: string;
  messages: Array<Message>;

  constructor(
    private messageService: MessageService, 
    private authService: AuthService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { 
    this.messages = new Array<Message>();
    
    this.route.params.subscribe(res => {
      this.userId = res['id'];
      this.messageService.getMessagesByUser(this.userId).subscribe(res => {
        this.messages = res;
      });
    });
  }

  ngOnInit(): void {
  }

  getUserId() {
    return this.authService.getUserId();
  }

  editMessage(id: number) {
    this.router.navigate([`messages/${id}/edit`]);
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(res => {
      this.router.navigate(["messages"])
    });
  }

  confirmDelete(name: string, id: number) {
    if(confirm(`${name} - Delete message?`)) {
      this.deleteMessage(id);
    }
  }

}
