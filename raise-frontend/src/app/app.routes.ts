import { Routes } from '@angular/router';

// Create chapter components
import { Chapter1Component } from './components/chapters/chapter1/chapter1.component';
import { Chapter2Component } from './components/chapters/chapter2/chapter2.component';
import { Chapter3Component } from './components/chapters/chapter3/chapter3.component';

export const routes: Routes = [
  { path: 'chapter1', component: Chapter1Component },
  { path: 'chapter2', component: Chapter2Component },
  { path: 'chapter3', component: Chapter3Component },
  { path: '', redirectTo: 'chapter1', pathMatch: 'full' }
];