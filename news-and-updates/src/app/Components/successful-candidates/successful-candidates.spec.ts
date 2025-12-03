import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulCandidates } from './successful-candidates';

describe('SuccessfulCandidates', () => {
  let component: SuccessfulCandidates;
  let fixture: ComponentFixture<SuccessfulCandidates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulCandidates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulCandidates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
