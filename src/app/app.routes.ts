import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', 
    loadComponent:  () => import('./pages/home/home.component').then(m => m.HomeComponent), 
    children: [
      {path: 'step1', loadComponent: () => import('./components/step1/step1.component').then(m => m.Step1Component)},
      {path: 'step2', loadComponent: () => import('./components/step2/step2.component').then(m => m.Step2Component)},
      {path: 'step3', loadComponent: () => import('./components/step3/step3.component').then(m => m.Step3Component)}
    ]},
  { path: '**', redirectTo: 'home/step1' }
];
