import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailTopComponent } from './doctor-detail-top.component';

describe('DoctorDetailTopComponent', () => {
  let component: DoctorDetailTopComponent;
  let fixture: ComponentFixture<DoctorDetailTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDetailTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
