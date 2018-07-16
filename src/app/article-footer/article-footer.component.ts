import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.scss']
})

export class ArticleFooterComponent implements OnInit {
  @Input() imageCredit: object;
  public longPage: boolean;

  constructor(
    private route: ActivatedRoute
  ) {}

  scrollToTop(): void {
    window.scroll({
      top: 0,
      behavior: "auto"
    });
  }

  checkRoute(): void {
    const url = this.route.snapshot.routeConfig.path;

    if (url === 'work/details') {
      this.longPage = true;
    }
  }

  ngOnInit(): void {
    this.checkRoute();
  }
}
