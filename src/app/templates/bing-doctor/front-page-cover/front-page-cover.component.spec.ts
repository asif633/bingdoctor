import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageCoverComponent } from './front-page-cover.component';

describe('FrontPageCoverComponent', () => {
  let component: FrontPageCoverComponent;
  let fixture: ComponentFixture<FrontPageCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontPageCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPageCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
