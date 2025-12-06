import { Routes } from '@angular/router';
import { SuccessfulCandidates } from './Components/successful-candidates/successful-candidates';
import { AcademyAnnouncements } from './Components/academy-announcements/academy-announcements';
import { MediaAndPress } from './Components/media-and-press/media-and-press';
import { LandingPage } from './Components/landing-page/landing-page';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'successful-candidates',
    component: SuccessfulCandidates,
  },
  {
    path: 'academy-announcements',
    component: AcademyAnnouncements,
  },
  {
    path: 'media-and-press',
    component: MediaAndPress,
  },
];
