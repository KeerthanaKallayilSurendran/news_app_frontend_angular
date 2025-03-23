import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
   socialLinks:any[] = [
    {
    name:'youtube',
    url: 'https://www.youtube.com'
    },
    {
      name:'instagram',
      url: 'https://www.instagram.com'
    },
    {
      name:'facebook',
      url: 'https://www.facebook.com'
    },
    {
      name:'twitter',
      url: 'https://www.twitter.com'
    },
    {
      name:'linkedin',
      url: 'https://www.linkedin.com'
    },
    {
      name:'snapchat',
      url: 'https://www.snapchat.com'
    },
    {
      name:'x',
      url: 'https://www.x.com'
    },
    {
      name:'threads',
      url: 'https://www.threads.com'
    }
  ]
}
