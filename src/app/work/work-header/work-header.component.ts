import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Work } from '../work-schema';
import { WorkService }  from '../work.service';

@Component({
  selector: 'app-work-header',
  templateUrl: './work-header.component.html'
})

export class WorkHeaderComponent implements OnInit {
  @Input() work: Work;

  @Input() subtitle: string;
  @Input() description: string;

  @ViewChild('tldr') tldr:ElementRef;
  tldrProvided:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService
  ) {}

  ngOnInit(): void {
    this.getWork();
  }

  ngAfterContentInit() {
    this.tldrProvided = !!this.tldr.nativeElement.children.length;
  }

  getWork(): void {
    const url = this.route.snapshot.routeConfig.path;
    this.workService.getWork(url).subscribe(work => this.work = work);
  }

}
