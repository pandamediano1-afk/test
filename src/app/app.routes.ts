import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: WorkComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: '' }
];
