import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCommentCreateComponent } from './task-comment-create.component';

describe('TaskCommentCreateComponent', () => {
  let component: TaskCommentCreateComponent;
  let fixture: ComponentFixture<TaskCommentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCommentCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCommentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
