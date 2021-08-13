import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/Message';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {
  messages: Array<Message>;

  constructor(private messageService: MessageService) {
    this.messages = new Array<Message>();
  }

  ngOnInit(): void {
    this.messageService.getAllMessages().subscribe(messages => {
      this.messages = messages;
      console.log(this.messages);
    })
  }
}
