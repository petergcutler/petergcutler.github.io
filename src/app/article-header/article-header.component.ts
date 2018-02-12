import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})

export class ArticleHeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { }

  @Input()
  header: string;

  @Input()
  subheader: string;

}
