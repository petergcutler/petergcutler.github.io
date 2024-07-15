import { Component, OnInit } from '@angular/core';

import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';

import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-uw-oculus-onboarding',
  templateUrl: './uw-oculus-onboarding.component.html',
  styleUrls: ['./uw-oculus-onboarding.component.scss']
})

export class UwOculusOnboardingComponent implements OnInit {

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
      url: '../assets/images/work/uw-oculus-onboarding/first-contact.jpg',
      description: 'Oculus First Contact'
    },
    {
      url: '../assets/images/work/uw-oculus-onboarding/tilt-brush.jpg',
      description: 'Tilt Brush by Google'
    }
  ];

  public galleryContentsB: object[] = [
    {
      url: '../assets/images/work/uw-oculus-onboarding/moderation-3a.png',
      description: 'Helping participants into VR'
    },
    {
      url: '../assets/images/work/uw-oculus-onboarding/moderation-2a.png',
      description: 'Moderating with Tilt Brush'
    }
  ];

  public galleryContentsC: object[] = [
    {
      url: '../assets/images/work/uw-oculus-onboarding/team-oasis-at-work.png',
      description: 'Our team, in a not-at-all-staged photograph'
    }
  ];

  constructor() {}

  ngOnInit() {}

}
