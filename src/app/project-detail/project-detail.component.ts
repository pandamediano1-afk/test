import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectDetail, projectDetails } from './project-details';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnDestroy {
  project: ProjectDetail | null = null;
  private readonly routeSubscription: Subscription;

  constructor(route: ActivatedRoute) {
    this.routeSubscription = route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? '';
      this.project = projectDetails[slug] ?? null;
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
