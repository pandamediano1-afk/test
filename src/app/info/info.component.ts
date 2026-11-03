import { Component } from '@angular/core';
import { portfolio } from '../portfolio-content';

@Component({
  selector: 'app-info',
  standalone: true,
  templateUrl: './info.component.html'
})
export class InfoComponent {
  readonly data = portfolio;

  displayUrl(url: string): string {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
}
