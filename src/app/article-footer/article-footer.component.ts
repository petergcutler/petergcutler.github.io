import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.scss']
})
export class ArticleFooterComponent implements OnInit {
  @Input()
  imageCredit: object;

  constructor() { }

  ngOnInit() {
  }

}
