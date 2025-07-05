
import { RouterModule, Routes } from '@angular/router';
import { Normal } from './normal/normal';
import { Reactivo } from './reactivo/reactivo';

export const routes: Routes = [
  { path: '', redirectTo: 'Normal', pathMatch: 'full' },
  { path: 'Normal', component: Normal },
  { path: 'Reactivo', component: Reactivo }
  
];
