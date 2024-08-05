import { Component } from '@angular/core';
import { DetailLayoutComponent } from '@lib/components/layouts/detail-layout/detail-layout.component';

@Component({
  selector: 'app-channel-section',
  standalone: true,
  imports: [
    DetailLayoutComponent
  ],
  templateUrl: './channel-section.component.html',
  styleUrl: './channel-section.component.css'
})
export class ChannelSectionComponent {
  channels = [
    {
      name: 'Google',
      url: '/Google'
    },
    {
      name: 'Dribble',
      url: '/Dribble'
    },
    {
      name: 'Behance',
      url: '/Behance'
    },
    {
      name: 'YouTube',
      url: '/YouTube'
    },
    {
      name: 'Vimeo',
      url: '/Vimeo'
    },
    {
      name: 'Medium',
      url: '/Medium'
    }
  ];

}
