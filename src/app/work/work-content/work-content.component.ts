import { Component, OnInit, Input } from '@angular/core';

import { Work } from '../work-list';

@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})

export class WorkContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  work: Work;

}
