import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PageScrollConfig } from 'ngx-page-scroll';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // Define the site's sections for main-pages links
  pages = [
    'about',
    'work'
    // 'writing'
  ];

  constructor(private router: Router) {
    PageScrollConfig.defaultScrollOffset = 125;
    PageScrollConfig.defaultDuration = 800;
    // Apply easeInOutQuint easing, via http://gizma.com/easing/
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
      	t /= d/2;
      	if (t < 1) return c/2*t*t*t*t*t + b;
      	t -= 2;
      	return c/2*(t*t*t*t*t + 2) + b;
      }
    };
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }
}
