import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToevoegenPollComponent } from './toevoegen-poll.component';

describe('ToevoegenPollComponent', () => {
  let component: ToevoegenPollComponent;
  let fixture: ComponentFixture<ToevoegenPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToevoegenPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToevoegenPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
