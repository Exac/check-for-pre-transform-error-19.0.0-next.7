import { Routes } from '@angular/router';
import {FooComponent} from "./foo/foo.component";

export const routes: Routes = [
  {
    path: 'bar/:foo',
    component: FooComponent,
  },
  {
    path: 'bar',
    loadComponent: () => import('./bar/bar.component').then(m => m.BarComponent),
  },
  {
    path: '**',
    redirectTo: 'bar'
  }
];
