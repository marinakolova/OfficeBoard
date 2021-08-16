import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  commentForm: FormGroup;
  task: any;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private router: Router
  ) {
    this.task = localStorage.getItem('task');

    this.commentForm = this.fb.group({
      'Content': ['', Validators.required],
      'TaskId': [this.task],
    });
  }

  ngOnInit(): void {
  }

  create() {
    this.commentService.create(this.commentForm.value).subscribe(res => {
      this.router.navigate([`/tasks/${this.task}`]);
    });
  }

  get content() {
    return this.commentForm.get('Content');
  }

}
