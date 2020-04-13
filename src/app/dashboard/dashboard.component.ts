import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, UrlSegment } from '@angular/router';

// import { PageScrollConfig } from 'ngx-page-scroll';
import { NgsRevealConfig } from 'ng-scrollreveal';

import { assign } from 'lodash-es';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  constructor(
    private router: Router,
    private config: NgsRevealConfig,
  ) {
    // Customize ng-scroll-reveal
    var scrollRevealOptions = {
      origin: 'bottom',
      distance: '0',
      duration: 1200,
      delay: 900,
      rotate: {
        x: 0,
        y: 0,
        z: 0
      },
      opacity: 0,
      scale: 0,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      reset: false,
      useDelay: 'onload',
      viewFactor: 0,
    };

    // customize ng-page-scroll
    // var pageScrollOptions = {
    //   defaultScrollOffset: 125,
    //   defaultDuration: 800,
    //   defaultEasingLogic: {
    //     ease: (t: number, b: number, c: number, d: number): number => {
    //       t /= d/2;
    //       if (t < 1) return c/2*t*t*t*t*t + b;
    //       t -= 2;
    //       return c/2*(t*t*t*t*t + 2) + b;
    //     }
    //   }
    // };

    assign(config, scrollRevealOptions);
    // assign(PageScrollConfig, pageScrollOptions);
  }



  ngOnInit() {
    // Force route changes to scroll to top
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });

  }
}
