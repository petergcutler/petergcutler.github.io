import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';

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
    trigger('revealNavItems', [
      transition('loading => loaded', [
        query('.main-nav-section', style({
          opacity: 0,
          transform: 'translateY(4px)'
        })),
        query('.main-nav-section', stagger('200ms', [
          animate('600ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
            opacity: 1,
            transform: 'translateY(0)'
          }))
        ]))
      ])
    ]),
    trigger('bounceBall', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      // Cubic-bezier value for easeOutQuart
      transition('inactive => active', animate('500ms 300ms cubic-bezier(0.165, 0.84, 0.44, 1)')),
      // Cubic-bezier value for easeInQuart
      transition('active => inactive', animate('300ms cubic-bezier(0.895, 0.03, 0.685, 0.22)')),
    ])
  ]
})

export class NavComponent implements OnInit {

  // Define the site's main-pages links
  pages = [
    {
      display: 'work',
      path: '/work',
      state: 'inactive'
    },
    {
      display: 'about',
      path: '/about',
      state: 'inactive'
    }
    // {
    //   title: 'writing',
    //   state: 'inactive'
    // }
  ];

  path: any = null;
  revealNav: string = 'loading';

  updateAnimationStates(loadedPath): void {
    _.each(this.pages, function(i) {
      if (_.startsWith(loadedPath, i.path)) {
        i.state = 'active';
      } else if (loadedPath === '/' && i.path === '/about') {
        i.state = 'active';
      } else {
        i.state = 'inactive';
      }
    });
  }

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {
    router.events.subscribe((event: Event) => {
      // If navigation is beginning, reset
      if (event instanceof NavigationStart) {
        this.path = null;
      }

      // If navigation is concluding, update the path
      if (event instanceof NavigationEnd ) {
        this.path = _.get(event, 'url');

        this.updateAnimationStates(this.path);
      }
    });
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.revealNav = 'loaded';
    this.cdRef.detectChanges();
  }

}
