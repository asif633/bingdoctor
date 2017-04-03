import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingDoctorComponent } from './bing-doctor.component';

describe('BingDoctorComponent', () => {
  let component: BingDoctorComponent;
  let fixture: ComponentFixture<BingDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
