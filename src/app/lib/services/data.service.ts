import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '@lib/types/content';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private videos: Content[] = [
    { title: 'How to improve your skills', author: 'Waseem Arshad', views: 10786 },
    { title: 'Another video', author: 'John Doe', views: 5432 },
    { title: 'Yet another video', author: 'Jane Smith', views: 1234 },
    { title: 'Last video', author: 'John Doe', views: 5432 },
    { title: 'Yet another video', author: 'Jane Smith', views: 1234 },
    { title: 'Last video', author: 'John Doe', views: 5432 },
    { title: 'Yet another video', author: 'Jane Smith', views: 1234 },
    { title: 'Last video', author: 'John Doe', views: 5432 },
    { title: 'Yet another video', author: 'Jane Smith', views: 1234 },
    { title: 'Last video', author: 'John Doe', views: 5432 }
  ];

  private people: Content[] = [
    { title: 'Waseem Arshad', author: 'User interface designer', views: 10786 },
    { title: 'John Doe', author: 'Developer', views: 5432 },
    { title: 'Jane Smith', author: 'Product manager', views: 1234 },
    { title: 'Rasyid D', author: 'Developer', views: 5432 },
    { title: 'Fahmi R', author: 'Product manager', views: 1234 },
    { title: 'Muhammad Doe', author: 'Developer', views: 5432 },
  ];

  private documents: Content[] = [
    { title: 'Mobile ui & ux guide 2013', author: 'William Makhoja', views: 10786 },
    { title: '2013 Marketing trends', author: 'Jane Smith', views: 5432 },
    { title: 'Mobile ui & ux guide 2013', author: 'William Makhoja', views: 10786 },
    { title: '2013 Marketing trends', author: 'Jane Smith', views: 5432 },
    { title: 'Mobile ui & ux guide 2013', author: 'William Makhoja', views: 10786 },
    { title: '2013 Marketing trends', author: 'Jane Smith', views: 5432 },
    { title: 'Mobile ui & ux guide 2013', author: 'William Makhoja', views: 10786 },
    { title: '2013 Marketing trends', author: 'Jane Smith', views: 5432 },
    { title: 'Mobile ui & ux guide 2013', author: 'William Makhoja', views: 10786 },
    { title: '2013 Marketing trends', author: 'Jane Smith', views: 5432 }
  ];

  getVideos(): Observable<Content[]> {
    return of(this.videos);
  }

  getPeople(): Observable<Content[]> {
    return of(this.people);
  }

  getDocuments(): Observable<Content[]> {
    return of(this.documents);
  }
}