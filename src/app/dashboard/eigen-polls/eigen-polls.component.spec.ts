import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EigenPollsComponent } from './eigen-polls.component';

describe('EigenPollsComponent', () => {
  let component: EigenPollsComponent;
  let fixture: ComponentFixture<EigenPollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EigenPollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EigenPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
