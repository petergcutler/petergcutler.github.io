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
  selector: 'app-crowdskout',
  templateUrl: './crowdskout.component.html',
  styleUrls: ['./crowdskout.component.scss'],
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

export class CrowdskoutComponent implements OnInit {

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

  public galleryContentsProfile: object[] = [
    {
      url: '../assets/images/work/crowdskout-segmenting/segmenting-0a.png',
      description: 'Demographics fields of a Crowdskout profile'
    },
    {
      url: '../assets/images/work/crowdskout-segmenting/segmenting-0b.png',
      description: 'Activity fields from a Crowdskout profile'
    }
  ];

  public galleryContentsSegmenting: object[] = [
    {
      url: '../assets/images/work/crowdskout-segmenting/segmenting-1a.png',
      description: 'Users can explore and select criteria to build a segment'
    },
    {
      url: '../assets/images/work/crowdskout-segmenting/segmenting-2a.png',
      description: 'As users select criteria, profiles filter dynamically'
    },
    // {
    //   url: '../assets/images/work/crowdskout-segmenting/segmenting-3a.png',
    //   description: 'Power users may write complex segments using CQL strings - a variant of SQL parsed by Crowdskout'
    // },
    {
      url: '../assets/images/work/crowdskout-segmenting/segmenting-4a.png',
      description: 'Segments instantly provide data and demographic details'
    }
  ];

  public galleryContentsForms: object[] = [
    {
      url: '../assets/images/work/crowdskout-form-editor/form-editor-1a.png',
      description: 'A look at the field selection and questions on a Crowdskout form'
    },
    {
      url: '../assets/images/work/crowdskout-form-editor/form-editor-2a.png',
      description: 'Additional Crowdskout form fields' 
    }
  ];

  public galleryContentsViz: object[] = [
    // {
    //   url: '../assets/images/work/crowdskout-data-viz/viz-1a.png',
    //   description: 'A user may select a custom segment of their data to include in the graph'
    // },
    {
      url: '../assets/images/work/crowdskout-data-viz/viz-2a.png',
      description: 'Users may select from a range of hundreds of different criteria to graph'
    },
    // {
    //   url: '../assets/images/work/crowdskout-data-viz/viz-3a.png',
    //   description: 'Depending on their prior selections, they may graph comparison, composition, or time-series graphs'
    // },
    {
      url: '../assets/images/work/crowdskout-data-viz/viz-4a.png',
      description: 'Users can control what style of graph they select, and toggle between options to compare'
    },
    // {
    //   url: '../assets/images/work/crowdskout-data-viz/viz-5a.png',
    //   description: 'Alternatively, they may select a table to customize'
    // },
    {
      url: '../assets/images/work/crowdskout-data-viz/viz-6a.png',
      description: 'The graph may be exported, or displayed elsewhere in Crowdskout for easy monitoring'
    }
  ];

  public galleryOne: object[] = [
    {
      url: '../assets/images/work/crowdskout/thing.png',
      description: 'Description'
    },
    {
      url: '../assets/images/work/crowdskout/thing.png',
      description: 'Description'
    },
  ];

  public galleryTwo: object[] = [
    {
      url: '../assets/images/work/crowdskout/thing.png',
      description: 'Description'
    },
    {
      url: '../assets/images/work/crowdskout/thing.png',
      description: 'Description'
    },
  ];


  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  getWorks(): void {
    this.workService.getWorks().subscribe(works => this.works = works);
  }

  getEras(): void {
    this.workService.getEras().subscribe(eras => this.eras = eras);
  }

  ngOnInit() {
    this.getWorks();
    this.getEras();

    // this.filteredWorks = this.works.filter((work) => work.client === 'Crowdskout');
  }

  ngAfterViewInit() {
    this.revealList = 'loaded';
    this.cdRef.detectChanges();
  }
}
