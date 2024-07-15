import { Component, OnInit } from '@angular/core';

import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';

import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-uw-complex-systems',
  templateUrl: './uw-complex-systems.component.html',
  styleUrls: ['./uw-complex-systems.component.scss']
})

export class UwComplexSystemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

  public galleryContentsA: object[] = [
    {
      url: '../assets/images/work/uw-complex-systems/problem-solving.png',
      description: 'VCAs have traditionally relied on analog, participatory methods'
    }
  ];

}
