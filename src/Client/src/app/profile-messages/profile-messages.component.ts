import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../models/Message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-profile-messages',
  templateUrl: './profile-messages.component.html',
  styleUrls: ['./profile-messages.component.css']
})
export class ProfileMessagesComponent implements OnInit {
  messages: Array<Message>;

  constructor(private messageService: MessageService, private router: Router) {
    this.messages = new Array<Message>();
  }

  ngOnInit(): void {
    this.fetchMessages();
  }

  fetchMessages() {
    this.messageService.getProfileMessages().subscribe(messages => {
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

  confirmDelete(name: string, id: number) {
    if(confirm(`${name} - Delete this message?`)) {
      this.deleteMessage(id);
    }
  }

}
