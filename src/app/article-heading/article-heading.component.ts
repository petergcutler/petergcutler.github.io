import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-heading',
  templateUrl: './article-heading.component.html',
  styleUrls: ['./article-heading.component.scss']
})

export class ArticleHeadingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { }

}
