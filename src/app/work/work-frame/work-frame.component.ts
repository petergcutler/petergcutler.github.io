import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Work } from '../work-schema';
import { WorkService }  from '../work.service';

@Component({
  selector: 'app-work-frame',
  templateUrl: './work-frame.component.html',
  styleUrls: ['./work-frame.component.scss']
})

export class WorkFrameComponent implements OnInit {
  @Input() work: Work;

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private location: Location
  ) {}

  getWork(): void {
    const url = this.route.snapshot.children[0].routeConfig.path;
    this.workService.getWork(url).subscribe(work => this.work = work);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getWork();
  }

}
