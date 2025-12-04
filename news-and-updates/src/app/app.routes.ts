import { Routes } from '@angular/router';
import { SuccessfulCandidates } from './Components/successful-candidates/successful-candidates';
import { AcademyAnnouncements } from './Components/academy-announcements/academy-announcements';
import { MediaAndPress } from './Components/media-and-press/media-and-press';

export const routes: Routes = [
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
  {
    path: '',
    redirectTo: '/successful-candidates',
    pathMatch: 'full',
  },
];
