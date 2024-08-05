import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-layout',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './detail-layout.component.html',
  styleUrl: './detail-layout.component.css'
})
export class DetailLayoutComponent {
  @Input() title: string = '';
  @Input() actionText: string = '';
  @Input() actionLink: string = '';
}
