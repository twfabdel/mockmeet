import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MeetComponent } from '../meet/meet.component';

const appRoutes: Routes = [
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'meet',
    component: MeetComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
