import { Component } from '@angular/core';
import { portfolio } from '../portfolio-content';

@Component({
  selector: 'app-work',
  standalone: true,
  templateUrl: './work.component.html'
})
export class WorkComponent {
  readonly data = portfolio;
}
