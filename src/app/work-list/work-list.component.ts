import { Component, OnInit } from '@angular/core';

import { Work } from '../work-list';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})

export class WorkListComponent implements OnInit {

  // selectedWork: Work;

  works: Work[];

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.getWorks();
  }

  // onSelect(work: Work): void {
  //   this.selectedWork = work;
  // }

  getWorks(): void {
    this.workService.getWorks()
        .subscribe(works => this.works = works);
  }
}
