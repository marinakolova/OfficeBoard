import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  messageForm: FormGroup;
  
  constructor(private fb: FormBuilder, private messageService: MessageService, private router: Router) { 
    this.messageForm = this.fb.group({
      'Title': ['', Validators.required],
      'Content': ['', Validators.required],
      'ImageUrl': [''],
    });
  }

  ngOnInit(): void {
  }

  create() {
    this.messageService.create(this.messageForm.value).subscribe(res => {
      this.router.navigate(["/messages"]);
    });
  }

  get title() {
    return this.messageForm.get('Title');
  }

  get content() {
    return this.messageForm.get('Content');
  } 

}
