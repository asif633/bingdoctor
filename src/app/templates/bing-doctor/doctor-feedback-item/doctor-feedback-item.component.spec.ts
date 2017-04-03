import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFeedbackItemComponent } from './doctor-feedback-item.component';

describe('DoctorFeedbackItemComponent', () => {
  let component: DoctorFeedbackItemComponent;
  let fixture: ComponentFixture<DoctorFeedbackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorFeedbackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorFeedbackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
