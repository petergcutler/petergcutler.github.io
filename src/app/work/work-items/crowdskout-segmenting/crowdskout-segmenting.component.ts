import { Component, OnInit } from '@angular/core';


import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';

import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-crowdskout-segmenting',
  templateUrl: './crowdskout-segmenting.component.html',
  styleUrls: ['./crowdskout-segmenting.component.scss']
})

export class CrowdskoutSegmentingComponent implements OnInit {


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

  constructor() {}

  ngOnInit() {}


}
