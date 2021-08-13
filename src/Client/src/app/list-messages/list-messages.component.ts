import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { Message } from '../models/Message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {
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

  editMessage(id: number) {
    this.router.navigate([`messages/${id}/edit`])
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(res => {
      this.fetchMessages();
    });
  }

}
