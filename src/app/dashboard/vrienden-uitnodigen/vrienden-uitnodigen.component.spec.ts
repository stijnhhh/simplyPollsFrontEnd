import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VriendenUitnodigenComponent } from './vrienden-uitnodigen.component';

describe('VriendenUitnodigenComponent', () => {
  let component: VriendenUitnodigenComponent;
  let fixture: ComponentFixture<VriendenUitnodigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VriendenUitnodigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VriendenUitnodigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
