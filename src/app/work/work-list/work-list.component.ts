import { Component, OnInit } from '@angular/core';

import { Work } from '../work-schema';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})

export class WorkListComponent implements OnInit {

  public works: Work[];

  constructor(private workService: WorkService) {}

  getWorks(): void {
    this.workService.getWorks().subscribe(works => this.works = works);
  }

  ngOnInit() {
    this.getWorks();
  }

}
