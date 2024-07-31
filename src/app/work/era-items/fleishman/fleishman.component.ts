import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Work } from '../../work-schema';
import { Era } from '../../era-schema';
import { WorkService } from '../../work.service';

import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

import { get, startsWith } from 'lodash-es';

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
  selector: 'app-fleishman',
  templateUrl: './fleishman.component.html',
  styleUrls: ['./fleishman.component.scss'],
    animations: [
    trigger('revealListItems', [
      transition('loading => loaded', [
        query('.era-detail-item', style({
          opacity: 0,
          transform: 'translateY(7px)'
        })),
        query('.era-detail-item', stagger('100ms', [
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

export class FleishmanComponent implements OnInit {

  public works: Work[];
  public eras: Era[];
  // public filteredWorks: any[];

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private cdRef: ChangeDetectorRef
  ) {}

  revealList: string = 'loading';

  // LightGallery Settings
  settings = {
    counter: false,
    plugins: [MediumZoom],
    backgroundColor: '#fff'
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  public galleryContentsATT: object[] = [
    {
      url: '../assets/images/work/fleishman/att-csr.png',
      description: 'AT&T Sustainability'
    },
    {
      url: '../assets/images/work/fleishman/att-icw.png',
      description: 'AT&T It Can Wait'
    },
  ];

  public galleryContentsNP: object[] = [
    {
      url: '../assets/images/work/fleishman/easterseals.png',
      description: 'Easterseals UCP'
    },
    {
      url: '../assets/images/work/fleishman/rwjf.png',
      description: 'Robert Wood Johnson Foundation'
    },
  ];

  getWorks(): void {
    this.workService.getWorks().subscribe(works => this.works = works);
  }

  getEras(): void {
    this.workService.getEras().subscribe(eras => this.eras = eras);
  }

  ngOnInit() {
    this.getWorks();
    this.getEras();

    // this.filteredWorks = this.works.filter((work) => work.client === 'VOX Global');
  }

  ngAfterViewInit() {
    this.revealList = 'loaded';
    this.cdRef.detectChanges();
  }
}
