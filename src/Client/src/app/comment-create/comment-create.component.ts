import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent {

  commentForm: FormGroup;
  task: any;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {
    this.task = localStorage.getItem('task');

    this.commentForm = this.fb.group({
      'Content': ['', Validators.required],
      'TaskId': [this.task],
    });
  }

  create() {
    this.commentService.create(this.commentForm.value).subscribe(res => {
      this.reloadCurrentRoute();
    });
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  get content() {
    return this.commentForm.get('Content');
  }

}
