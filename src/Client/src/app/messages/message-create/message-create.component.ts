import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent implements OnInit {
  public Editor = ClassicEditor;

  messageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.messageForm = this.fb.group({
      'Title': ['', Validators.required],
      'Content': ['', Validators.required],
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
