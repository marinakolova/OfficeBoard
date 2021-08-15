import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../models/Message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages-board',
  templateUrl: './messages-board.component.html',
  styleUrls: ['./messages-board.component.css']
})
export class MessagesBoardComponent implements OnInit {

  messages: Array<Message>;

  constructor(private messageService: MessageService, private router: Router) {
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

}
