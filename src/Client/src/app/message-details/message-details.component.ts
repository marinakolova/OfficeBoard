import { Component, OnInit } from '@angular/core';
import { Message } from '../models/Message';
import { MessageService } from '../services/message.service';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  id!: number;
  message!: Message;

  constructor(
    private messageService: MessageService, 
    private authService: AuthService, 
    private route: ActivatedRoute, 
    private router: Router
  ) { }

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

  getUserId() {
    return this.authService.getUserId();
  }

  editMessage(id: number) {
    this.router.navigate([`messages/${id}/edit`]);
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(res => {
      this.router.navigate(["messages"])
    });
  }

  confirmDelete(name: string, id: number) {
    if(confirm(`${name} - Delete this message?`)) {
      this.deleteMessage(id);
    }
  }

}
