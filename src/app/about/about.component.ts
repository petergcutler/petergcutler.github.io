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
    // trigger('revealNavElements', [
    //     state('loading, void', style({
    //         opacity: '0',
    //     })),
    //     state('loaded', style({
    //         opacity: '1',
    //     })),
    //     transition('loading => loaded', animate('200ms ease-in'))
    // ]),
    trigger('revealAboutItems', [
      transition('loading => loaded', [
        query('.about-item', style({
          opacity: 0,
          // transform: 'translateX(-40px)'
        })),
        query('.about-item', stagger('100ms', [
          animate('400ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
            opacity: 1,
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
