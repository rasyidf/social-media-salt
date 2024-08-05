import { Component, Input } from '@angular/core';
import { Content } from '@lib/types/content';

@Component({
  selector: 'app-group-section',
  standalone: true,
  imports: [],
  templateUrl: './group-section.component.html',
  styleUrl: './group-section.component.css'
})
export class GroupSectionComponent {
  @Input() category: string = 'Videos';
  @Input() contents!: Content[];
  @Input() actionText: string = 'View all';

  
}
