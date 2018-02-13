import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { Work } from '../work-list';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})

export class WorkContentComponent {
  @Input()
  work: Work;

  private myTemplate: any = '';

  constructor(private router: Router, http: Http) {
    let workTitleUrl = this.router.url.slice(5);
    let templatePath = 'assets/work-templates' + workTitleUrl + '.html';

    http.get(templatePath)
    .subscribe(data => {
      this.myTemplate = data.text();
    });
  }

}
