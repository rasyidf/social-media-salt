import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: {
    title: string;
    url: string;
  }[] = [];

  @Input() size: 'xs' | 'sm' | 'md' | 'lg' = 'md';

}
