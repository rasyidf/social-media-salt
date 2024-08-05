import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  links = [
    {
      title: 'Privacy Policy',
      url: '/privacy-policy'
    },
    {
      title: 'Terms of Service',
      url: '/terms-of-service'
    }
  ];

  navigation = [

    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'For Business',
      url: '/business'
    },
    {
      title: 'Suggestions',
      url: '/suggestions'
    },
    {
      title: 'Help & FAQ',
      url: '/help'
    },
    {
      title: 'Contact',
      url: '/contact'
    },
    {
      title: 'Pricing',
      url: '/pricing'
    }
  ];

}
