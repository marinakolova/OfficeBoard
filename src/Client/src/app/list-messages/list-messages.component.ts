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
    this.fetchMessages();
  }

  fetchMessages() {
    this.messageService.getAllMessages().subscribe(messages => {
      this.messages = messages;
    })
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(res => {
      this.fetchMessages();
    });
  }

  editMessage(id: number) {

  }
}
