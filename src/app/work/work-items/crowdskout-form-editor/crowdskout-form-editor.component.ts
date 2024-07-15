import { Component, OnInit } from '@angular/core';

import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';

import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-crowdskout-form-editor',
  templateUrl: './crowdskout-form-editor.component.html',
  styleUrls: ['./crowdskout-form-editor.component.scss']
})
export class CrowdskoutFormEditorComponent implements OnInit {

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
    url: '../assets/images/work/crowdskout-form-editor/form-editor-1a.png',
    description: 'A look at the field selection and questions on a Crowdskout form'
  },
  {
    url: '../assets/images/work/crowdskout-form-editor/form-editor-2a.png',
    description: 'Additional Crowdskout form fields' 
  }
];

  constructor() { }

  ngOnInit() {
  }

}
