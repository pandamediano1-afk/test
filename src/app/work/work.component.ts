import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { portfolio } from '../portfolio-content';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './work.component.html'
})
export class WorkComponent {
  readonly data = portfolio;
}
