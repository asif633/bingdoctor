import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailTabsComponent } from './doctor-detail-tabs.component';

describe('DoctorDetailTabsComponent', () => {
  let component: DoctorDetailTabsComponent;
  let fixture: ComponentFixture<DoctorDetailTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDetailTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDetailTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
