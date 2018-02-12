import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Work } from '../work-list';
import { WorkService }  from '../work.service';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {
  @Input() work: Work;

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getWork();
  }

  getWork(): void {
    const url = this.route.snapshot.paramMap.get('url');
    this.workService.getWork(url).subscribe(work => this.work = work);
  }

  goBack(): void {
    this.location.back();
  }

}
