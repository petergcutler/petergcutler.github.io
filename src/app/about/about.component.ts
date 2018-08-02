import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('revealAboutItems', [
      transition('loading => loaded', [
        query('.about-item', style({
          opacity: 0,
          transform: 'translateY(5px)'
          // transform: 'translateX(-40px)'
        })),
        query('.about-item', stagger('70ms', [
          animate('700ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
            opacity: 1,
            transform: 'translateY(0)'
            // transform: 'translateX(0)'
          }))
        ]))
      ])
    ])
  ]
})

export class AboutComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef ) {}

  revealAbout: string = 'loading';

  ngOnInit() {}

  ngAfterViewInit() {
    this.revealAbout = 'loaded';
    this.cdRef.detectChanges();
  }

}
