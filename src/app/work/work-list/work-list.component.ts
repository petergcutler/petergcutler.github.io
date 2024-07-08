import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Work } from '../work-schema';
import { Era } from '../era-schema';
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
        query('.era-item-new', style({
          opacity: 0,
          transform: 'translateY(7px)'
        })),
        query('.era-item-new', stagger('100ms', [
          animate('800ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
            opacity: 1,
            transform: 'translateY(0)'
            // transform: 'translateX(0)'
          }))
        ]))
      ])
    ])
  ]
})

export class WorkListComponent implements OnInit {

  public works: Work[];
  public eras: Era[];

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private cdRef: ChangeDetectorRef
  ) {}

  revealList: string = 'loading';

  getWorks(): void {
    this.workService.getWorks().subscribe(works => this.works = works);
  }

  getEras(): void {
    this.workService.getEras().subscribe(eras => this.eras = eras);
  }

  ngOnInit() {
    this.getWorks();
    this.getEras();
  }

  ngAfterViewInit() {
    this.revealList = 'loaded';
    this.cdRef.detectChanges();
  }

}
