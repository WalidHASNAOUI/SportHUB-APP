import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationDetailsComponent } from './publication-details.component';

describe('PublicationDetailsComponent', () => {
  let component: PublicationDetailsComponent;
  let fixture: ComponentFixture<PublicationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
