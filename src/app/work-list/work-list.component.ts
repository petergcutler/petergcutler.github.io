import { Component, OnInit } from '@angular/core';

import { Work } from '../work-list';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})

export class WorkListComponent implements OnInit {

  works: Work[];

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.getWorks();
  }

  getWorks(): void {
    this.workService.getWorks()
        .subscribe(works => this.works = works);
  }
}
