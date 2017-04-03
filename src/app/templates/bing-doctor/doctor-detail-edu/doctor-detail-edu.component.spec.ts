import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailEduComponent } from './doctor-detail-edu.component';

describe('DoctorDetailEduComponent', () => {
  let component: DoctorDetailEduComponent;
  let fixture: ComponentFixture<DoctorDetailEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDetailEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
