import { Component, OnInit } from '@angular/core';

import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';

import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-crowdskout-datetime',
  templateUrl: './crowdskout-datetime.component.html',
  styleUrls: ['./crowdskout-datetime.component.scss']
})
export class CrowdskoutDatetimeComponent implements OnInit {

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
  {
    url: '../assets/images/work/crowdskout-datetime/datetime-1a.png',
    description: 'The implementation for date alone'
  },
  {
    url: '../assets/images/work/crowdskout-datetime/datetime-2a.png',
    description: 'The implementation for datetime inputs' 
  }
];

  constructor() { }

  ngOnInit() {
  }

}
