import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { portfolio } from './portfolio-content';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly portfolio = portfolio;

  constructor() {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }
}
