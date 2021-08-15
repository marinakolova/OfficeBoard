import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCreateComponent } from './message-create.component';

describe('MessageCreateComponent', () => {
  let component: MessageCreateComponent;
  let fixture: ComponentFixture<MessageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
