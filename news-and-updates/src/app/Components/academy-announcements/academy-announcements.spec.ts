import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyAnnouncements } from './academy-announcements';

describe('AcademyAnnouncements', () => {
  let component: AcademyAnnouncements;
  let fixture: ComponentFixture<AcademyAnnouncements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademyAnnouncements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyAnnouncements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
