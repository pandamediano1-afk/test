import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: WorkComponent },
  { path: 'info', component: InfoComponent },
  { path: 'project/:slug', component: ProjectDetailComponent },
  // Keep the plural path working for links opened before the route was renamed.
  { path: 'projects/:slug', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' }
];
