import { Component, Input, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

import { get, startsWith } from 'lodash-es';

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.scss']
})

export class ArticleFooterComponent implements OnInit {

  public longPage: boolean;
  public path: any;
  public currentYear: any = new Date().getFullYear();
  // public imageCredit: object = get(this.work, 'imageCredit');

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      // If navigation is beginning, reset

      if (event instanceof NavigationStart) {
        this.path = null;
        this.longPage = false;
      }

      // If navigation is concluding, check for long page
      if (event instanceof NavigationEnd ) {
        this.path = get(event, 'url');

        if (startsWith(this.path, '/work/')) {
          this.longPage = true;
        }

        if (startsWith(this.path, '/work/trakstar')) {
          this.longPage = false;
        }
      }

    });
  }

  scrollToTop(): void {
    window.scroll({
      top: 0,
      behavior: "auto"
    });
  }

  ngOnInit() {}

}
