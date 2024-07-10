import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, UrlSegment } from '@angular/router';
// import { PageScrollConfig } from 'ngx-page-scroll';

import { assign } from 'lodash-es';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  constructor(
    private router: Router,
  ) {
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
