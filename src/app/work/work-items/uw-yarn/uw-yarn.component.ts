import { Component, OnInit } from '@angular/core';

import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';

import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-uw-yarn',
  templateUrl: './uw-yarn.component.html',
  styleUrls: ['./uw-yarn.component.scss']
})
export class UwYarnComponent implements OnInit {

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
      url: '../assets/images/work/uw-yarn/recruitment-photo.png',
      description: 'Sharing DIY and running progress on Yarn'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
