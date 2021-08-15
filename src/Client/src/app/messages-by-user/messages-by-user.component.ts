import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../models/Message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages-by-user',
  templateUrl: './messages-by-user.component.html',
  styleUrls: ['./messages-by-user.component.css']
})
export class MessagesByUserComponent implements OnInit {

  userId!: string;
  messages: Array<Message>;

  constructor(private messageService: MessageService, private route: ActivatedRoute) { 
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

}
