import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipReportComponent } from './leadership-report.component';

describe('LeadershipReportComponent', () => {
  let component: LeadershipReportComponent;
  let fixture: ComponentFixture<LeadershipReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadershipReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadershipReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
