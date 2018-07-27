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
  selector: 'app-nav',
  templateUrl: './nav.component.html',
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
    trigger('revealNavItems', [
      transition('loading => loaded', [
        query('.main-nav-item', style({
          opacity: 0,
          // transform: 'translateX(-40px)'
        })),
        query('.main-nav-item', stagger('200ms', [
          animate('800ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
            opacity: 1,
            // transform: 'translateX(0)'
          }))
        ]))
      ])
    ])
  ]
})

export class NavComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef) {}

  // Define the site's sections for main-pages links
  pages = [
    'about',
    'work'
    // 'writing'
  ];

  revealNav: string = 'loading';

  ngOnInit() {}

  ngAfterViewInit() {
    this.revealNav = 'loaded';
    this.cdRef.detectChanges();
  }

}
