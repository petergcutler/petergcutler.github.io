import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';

import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';

import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-crowdskout-data-viz',
  templateUrl: './crowdskout-data-viz.component.html',
  styleUrls: ['./crowdskout-data-viz.component.scss']
})

export class CrowdskoutDataVizComponent implements AfterViewInit {

  // constructor() {}

  // ngOnInit() {}


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

  public galleryContents: object[] = [
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

  ngAfterViewInit() {
  }

}
