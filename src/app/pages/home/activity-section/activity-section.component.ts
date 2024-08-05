import { Component } from '@angular/core';
import { DetailLayoutComponent } from '@lib/components/layouts/detail-layout/detail-layout.component';

@Component({
  selector: 'app-activity-section',
  standalone: true,
  imports: [
    DetailLayoutComponent
  ],
  templateUrl: './activity-section.component.html',
  styleUrl: './activity-section.component.css'
})
export class ActivitySectionComponent {
  activities = [
    {
      title: 'New Video',
      description: 'Check out the latest video from Salt Media',
      date: '1 hour ago',
      url: '/videos'
    },
    {
      title: 'New Document',
      description: 'Check out the latest document from Salt Media',
      date: '2 hours ago',
      url: '/documents'
    },
    {
      title: 'New Event',
      description: 'Check out the latest event from Salt Media',
      date: '3 hours ago',
      url: '/events'
    },
    {
      title: 'New Community',
      description: 'Check out the latest community from Salt Media',
      date: '4 hours ago',
      url: '/community'
    }
  ];

}
