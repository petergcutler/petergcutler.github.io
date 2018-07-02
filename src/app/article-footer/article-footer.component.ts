import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.scss']
})

export class ArticleFooterComponent implements OnInit {
  @Input()
  imageCredit: object;

  public longPage : boolean;

  scrollToTop(): void {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  constructor(
    private route: ActivatedRoute
  ) {}

  checkRoute(): void {
    const url = this.route.snapshot.routeConfig.path;

    if (url === 'work/details') {
      this.longPage = true;
    } else {
      this.longPage = false;
    }
  }

  ngOnInit(): void {
    this.checkRoute();
  }
}
