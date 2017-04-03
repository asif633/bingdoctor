import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListingItemComponent } from './doctor-listing-item.component';

describe('DoctorListingItemComponent', () => {
  let component: DoctorListingItemComponent;
  let fixture: ComponentFixture<DoctorListingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorListingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
