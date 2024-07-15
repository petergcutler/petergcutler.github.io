import { Component, OnInit } from '@angular/core';

import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';

import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-vox-global-brand-redesign',
  templateUrl: './vox-global-brand-redesign.component.html',
  styleUrls: ['./vox-global-brand-redesign.component.scss']
})
export class VoxGlobalBrandRedesignComponent implements OnInit {

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
      url: '../assets/images/work/vox-global-brand-redesign/original-1.png',
      description: 'VOX Global Homepage - Before'
    },
    {
      url: '../assets/images/work/vox-global-brand-redesign/new-1.png',
      description: 'VOX Global Homepage - After'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
