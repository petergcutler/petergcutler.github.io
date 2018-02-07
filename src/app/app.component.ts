import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // Define the site's sections for sidebar links
  links = [
    'about',
    'cv',
    'work',
    'writing'
  ];

}
