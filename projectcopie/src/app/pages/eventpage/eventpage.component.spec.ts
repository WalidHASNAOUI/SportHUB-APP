import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPageComponent } from './eventpage.component';

describe('EventpageComponent', () => {
  let component: EventPageComponent;
  let fixture: ComponentFixture<EventPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventPageComponent]
    });
    fixture = TestBed.createComponent(EventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
