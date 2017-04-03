import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicListingItemComponent } from './clinic-listing-item.component';

describe('ClinicListingItemComponent', () => {
  let component: ClinicListingItemComponent;
  let fixture: ComponentFixture<ClinicListingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicListingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicListingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
