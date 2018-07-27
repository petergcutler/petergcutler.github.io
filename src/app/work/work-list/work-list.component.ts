import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Work } from '../work-schema';
import { WorkService } from '../work.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss'],
  animations: [
    trigger('revealListItems', [
      transition('loading => loaded', [
        query('.work-item', style({
          opacity: 0
        })),
        query('.work-item', stagger('100ms', [
          animate('800ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
            opacity: 1,
            // transform: 'translateX(0)'
          }))
        ]))
      ])
    ]),
    // trigger('revealWorkItems', [
    //   transition('loadingA => loadedA', [
    //     query('.work-list-item', style({
    //       opacity: 0
    //     })),
    //     query('.work-list-item', stagger('200ms', [
    //       animate('800ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
    //         opacity: 1,
    //         // transform: 'translateX(0)'
    //       }))
    //     ]))
    //   ])
    // ])
  ]
})

export class WorkListComponent implements OnInit {

  public works: Work[];

  constructor(
    private workService: WorkService,
    private cdRef: ChangeDetectorRef
  ) {}

  revealList: string = 'loading';
  revealWork: string = 'loadingA';


  getWorks(): void {
    this.workService.getWorks().subscribe(works => this.works = works);
  }

  ngOnInit() {
    this.getWorks();
  }

  ngAfterViewInit() {
    this.revealList = 'loaded';
    this.revealWork = 'loadedA';
    this.cdRef.detectChanges();
  }

}
