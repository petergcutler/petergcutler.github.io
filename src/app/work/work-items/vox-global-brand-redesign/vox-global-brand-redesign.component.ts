import { Component, OnInit } from '@angular/core';

import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-vox-global-brand-redesign',
  templateUrl: './vox-global-brand-redesign.component.html',
  styleUrls: ['./vox-global-brand-redesign.component.scss']
})
export class VoxGlobalBrandRedesignComponent implements OnInit {

  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  constructor() { }

  ngOnInit() {
  }

}
