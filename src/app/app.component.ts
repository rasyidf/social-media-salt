import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerLayoutComponent } from '@lib/components/layouts/container-layout/container-layout.component';
import { NavbarComponent } from "./lib/components/navbar/navbar.component";
import { BreadcrumbsComponent } from "./lib/components/breadcrumbs/breadcrumbs.component";
import { FooterComponent } from "./lib/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerLayoutComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'salt-social-media';
  links = [
    {
      url: '/videos',
      title: 'Videos'
    },
    {
      url: '/people',
      title: 'People'
    },
    {
      url: '/documents',
      title: 'Documents'
    },
    {
      url: '/events',
      title: 'Events'
    },
    {
      url: '/community',
      title: 'Community'
    },
    {
      url: '/favorites',
      title: 'Favorites'
    },
    {
      url: '/channels',
      title: 'Channels'
    }
  ];
}
