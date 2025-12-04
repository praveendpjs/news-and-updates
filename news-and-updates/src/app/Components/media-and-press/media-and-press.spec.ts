import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAndPress } from './media-and-press';

describe('MediaAndPress', () => {
  let component: MediaAndPress;
  let fixture: ComponentFixture<MediaAndPress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaAndPress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaAndPress);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
