import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../models/Message';
import { MessageService } from '../services/message.service';
import { map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-message',
  templateUrl: './details-message.component.html',
  styleUrls: ['./details-message.component.css']
})
export class DetailsMessageComponent implements OnInit {
  id!: number;
  message!: Message;

  constructor(private messageService: MessageService, private route: ActivatedRoute, private router: Router) { }

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

  editMessage(id: number) {
    this.router.navigate([`messages/${id}/edit`])
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(res => {
      this.router.navigate(["/messages"]);
    });
  }
  
}
