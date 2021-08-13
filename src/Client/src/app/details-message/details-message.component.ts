import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../models/Message';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-details-message',
  templateUrl: './details-message.component.html',
  styleUrls: ['./details-message.component.css']
})
export class DetailsMessageComponent implements OnInit {
  id!: number;
  message!: Message;

  constructor(private messageService: MessageService, private route: ActivatedRoute) { 
    this.route.params.subscribe(res => {
      this.id = res['id'];
      this.messageService.getMessageDetails(this.id).subscribe(res => {
        this.message = res;
      });
    });
  }

  ngOnInit(): void {    
  }

}
