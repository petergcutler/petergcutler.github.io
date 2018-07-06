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
    },
  ];


}
