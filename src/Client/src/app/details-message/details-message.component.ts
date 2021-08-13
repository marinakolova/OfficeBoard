import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../models/Message';
import { MessageService } from '../services/message.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-message',
  templateUrl: './details-message.component.html',
  styleUrls: ['./details-message.component.css']
})
export class DetailsMessageComponent implements OnInit {
  id!: number;
  message!: Message;

  constructor(private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.route.params.pipe(map(params => {
      const id = params['id'];
      return id
    }), mergeMap(id => this.messageService.getMessageDetails(id))).subscribe(res => {
      this.message = res;
    });
  }
  
}
