import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessagesByUserComponent } from './list-messages-by-user.component';

describe('ListMessagesByUserComponent', () => {
  let component: ListMessagesByUserComponent;
  let fixture: ComponentFixture<ListMessagesByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMessagesByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMessagesByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
