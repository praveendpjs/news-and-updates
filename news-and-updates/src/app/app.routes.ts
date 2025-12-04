import { Routes } from '@angular/router';
import { SuccessfulCandidates } from './Components/successful-candidates/successful-candidates';

export const routes: Routes = [
  {
    path: 'successful-candidates',
    component: SuccessfulCandidates,
  },
  {
    path: '',
    redirectTo: '/successful-candidates',
    pathMatch: 'full',
  },
];
