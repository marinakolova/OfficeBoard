import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsByTaskComponent } from './comments-by-task.component';

describe('CommentsByTaskComponent', () => {
  let component: CommentsByTaskComponent;
  let fixture: ComponentFixture<CommentsByTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsByTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsByTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
