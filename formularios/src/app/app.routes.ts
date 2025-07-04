import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Normal } from './normal/normal';
import { Reactivo } from './reactivo/reactivo';

export const routes: Routes = [
  { path: 'home', component: Normal },
  { path: 'about', component: Reactivo },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
