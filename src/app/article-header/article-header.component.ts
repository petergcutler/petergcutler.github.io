import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})

export class ArticleHeaderComponent implements OnInit {

  @Input() header: string;
  @Input() subheader: string;

  constructor() {}

  ngOnInit() {}

}
