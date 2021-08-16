import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../models/Message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  
  id!: number;
  message!: Message;
  messageForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private messageService: MessageService, 
    private route: ActivatedRoute,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.messageService.getMessageDetails(this.id).subscribe(res => {
        this.message = res;

        this.messageForm = this.fb.group({
          'Title': [this.message.title, Validators.required],
          'Content': [this.message.content, Validators.required],
          'Id': [this.message.id],
        });
      });
    });
  }

  editMessage() {
    this.messageService.editMessage(this.messageForm.value).subscribe(res => {
      this.router.navigate(["/messages"]);
    });
  }

  confirmEdit() {
    if(confirm("Save changes to this message?")) {
      this.editMessage();
    }
  }

  get title() {
    return this.messageForm.get('Title');
  }

  get content() {
    return this.messageForm.get('Content');
  }

}
