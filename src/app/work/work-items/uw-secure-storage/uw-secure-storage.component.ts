import { Component, OnInit } from '@angular/core';

import { LightgalleryModule } from 'lightgallery/angular';
import MediumZoom from 'lightgallery/plugins/mediumZoom';

import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-uw-secure-storage',
  templateUrl: './uw-secure-storage.component.html',
  styleUrls: ['./uw-secure-storage.component.scss']
})

export class UwSecureStorageComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

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
      url: '../assets/images/work/uw-secure-storage/homeless-housing-programs.png',
      description: 'The four types of homeless housing programs in Seattle'
    },
    {
      url: '../assets/images/work/uw-secure-storage/homelessness-budgets.jpeg',
      description: 'The homelessness spending budget in Seattle'
    }
  ];

  public galleryContentsB: object[] = [
    {
      url: '../assets/images/work/uw-secure-storage/hope-lockers.png',
      description: 'Sketches of the H.O.P.E. lockers in Salt Lake City'
    },
    {
      url: '../assets/images/work/uw-secure-storage/denver-lockers.jpg',
      description: 'One of the lockers from Denver\'s program'
    }
  ];

  public galleryContentsC: object[] = [
    {
      url: '../assets/images/work/uw-secure-storage/shed-mockup-1.jpg',
      description: 'Schematics function well on paper for an MVP'
    },
    {
      url: '../assets/images/work/uw-secure-storage/shed-mockup-2.jpg',
      description: 'Compiling many schematics as a single toolkit'
    }
  ];

  public nickelsvilleImages: object[] = [
    {
      url: '../assets/images/work/uw-secure-storage/nickelsville-1a.png',
      description: 'A long view of a corridor in Nickelsville Ballard'
    },
    {
      url: '../assets/images/work/uw-secure-storage/nickelsville-2a.png',
      description: 'The communal storage shed for Nickelsville'
    },
    {
      url: '../assets/images/work/uw-secure-storage/nickelsville-3a.png',
      description: 'An enclosed area for cooking'
    },
    // {
    //   url: '../assets/images/work/uw-secure-storage/nickelsville-4a.png',
    //   description: 'A semi-enclosed area for eating'
    // },
    // {
    //   url: '../assets/images/work/uw-secure-storage/nickelsville-5a.png',
    //   description: 'An uncovered structural support for another shelter'
    // }
  ];

  public personaImages: object[] = [
    {
      url: '../assets/images/work/uw-secure-storage/HCDE518_Personas-1.jpg',
      description: 'One of the personas synthesized from our research findings'
    },
    {
      url: '../assets/images/work/uw-secure-storage/HCDE518_Personas-2.jpg',
      description: 'One of the personas synthesized from our research findings'
    },
    {
      url: '../assets/images/work/uw-secure-storage/HCDE518_Personas-3.jpg',
      description: 'One of the personas synthesized from our research findings'
    }
  ];

  public sketchImages: object[] = [
    {
      url: '../assets/images/work/uw-secure-storage/sketch-1.jpg',
      description: 'A system using commercial footlockers'
    },
    {
      url: '../assets/images/work/uw-secure-storage/sketch-2.png',
      description: 'A system using public recycling bins'
    },
    {
      url: '../assets/images/work/uw-secure-storage/sketch-3.jpg',
      description: 'A modular system based around sub-components'
    }
  ];
}
