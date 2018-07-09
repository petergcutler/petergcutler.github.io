import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uw-secure-storage',
  templateUrl: './uw-secure-storage.component.html',
  styleUrls: ['./uw-secure-storage.component.scss']
})

export class UwSecureStorageComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  public nickelsvilleImages: object[] = [
    {
      path: '../assets/images/work/uw-secure-storage/nickelsville-1a.png',
      description: 'A long view of a corridor in Nickelsville Ballard'
    },
    {
      path: '../assets/images/work/uw-secure-storage/nickelsville-2a.png',
      description: 'The communal storage shed for Nickelsville'
    },
    {
      path: '../assets/images/work/uw-secure-storage/nickelsville-3a.png',
      description: 'An enclosed area for cooking'
    },
    {
      path: '../assets/images/work/uw-secure-storage/nickelsville-4a.png',
      description: 'A semi-enclosed area for eating'
    },
    {
      path: '../assets/images/work/uw-secure-storage/nickelsville-5a.png',
      description: 'An uncovered structural support for another shelter'
    }
  ];

  public personaImages: object[] = [
    {
      path: '../assets/images/work/uw-secure-storage/HCDE518_Personas-1.jpg',
      description: 'One of the personas synthesized from our research findings'
    },
    {
      path: '../assets/images/work/uw-secure-storage/HCDE518_Personas-2.jpg',
      description: 'One of the personas synthesized from our research findings'
    },
    {
      path: '../assets/images/work/uw-secure-storage/HCDE518_Personas-3.jpg',
      description: 'One of the personas synthesized from our research findings'
    }
  ];

  public sketchImages: object[] = [
    {
      path: '../assets/images/work/uw-secure-storage/sketch-1.jpg',
      description: 'A system using commercial footlockers'
    },
    {
      path: '../assets/images/work/uw-secure-storage/sketch-2.jpg',
      description: 'A system using public recycling bins'
    },
    {
      path: '../assets/images/work/uw-secure-storage/sketch-3.jpg',
      description: 'A modular system based around sub-components'
    }
  ];
}
