import { Component } from '@angular/core';
import { ActivitySectionComponent } from './activity-section/activity-section.component';
import { ChannelSectionComponent } from './channel-section/channel-section.component';
import { GroupSectionComponent } from '@lib/components/group-section/group-section.component';
import { ContainerLayoutComponent } from "../../lib/components/layouts/container-layout/container-layout.component";
import { Content } from '@lib/types/content';
import { MockDataService } from '@lib/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ActivitySectionComponent,
    ChannelSectionComponent,
    GroupSectionComponent,
    ContainerLayoutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  videos: Content[] = [];
  people: Content[] = [];
  documents: Content[] = [];

  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.fetchVideos();
    this.fetchPeople();
    this.fetchDocuments();
  }

  fetchVideos(): void {
    this.mockDataService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

  fetchPeople(): void {
    this.mockDataService.getPeople().subscribe(people => {
      this.people = people;
    });
  }

  fetchDocuments(): void {
    this.mockDataService.getDocuments().subscribe(documents => {
      this.documents = documents;
    });
  }
}
