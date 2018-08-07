import {
  Component,
  HostListener,
  OnInit,
  Input,
  Injectable,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  group,
  stagger
} from '@angular/animations';

import { ActivatedRoute, Event } from '@angular/router';

import { Work } from '../work-schema';
import { WorkService }  from '../work.service';

@Component({
  selector: 'app-work-header',
  templateUrl: './work-header.component.html',
  animations: [
    trigger('revealWorkHeaderItems', [
      transition('* => loadedMobile', [
        group([
          query('.work-titling-reveal', style({
            opacity: 0,
            transform: 'translateY(4px)'
          })),
          query('.work-title-border', style({
            transform: 'translateX(33%) scaleX(0)',
            transformOrigin: 'left center'
          })),
          query('.work-titling-reveal', stagger('200ms', [
            animate('800ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
              opacity: 1,
              transform: 'translateY(0)'
            }))
          ])),
          query('.work-title-border', animate('800ms 100ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
              transform: 'translateX(33%) scaleX(1)',
              transformOrigin: 'left center'
            }))
          ),
          query('.work-header-reveal', style({
            opacity: 0,
            transform: 'translateY(4px)'
          })),
          query('.work-header-reveal', stagger('200ms', [
            animate('600ms 400ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
              opacity: 1,
              transform: 'translateY(0)'
            }))
          ]))
        ])
      ]),
      transition('* => loadedDesktop', [
        group([
          query('.work-titling-reveal', style({
            opacity: 0,
            transform: 'translateY(4px)'
          })),
          query('.work-title-border', style({
            transform: 'translateX(33%) scaleY(0)',
            transformOrigin: 'center bottom'
          })),
          query(
            '.work-titling-reveal',
            stagger('300ms', [
              animate('1s cubic-bezier(0.6, 0.2, 0.1, 1)',
              style({
                opacity: 1,
                transform: 'translateY(0)'
            }))
          ])),
          query(
            '.work-title-border',
            animate('800ms 200ms cubic-bezier(0.6, 0.2, 0.1, 1)',
            style({
              transform: 'translateX(33%) scaleY(1)',
              transformOrigin: 'center bottom'
            }))
          ),
          query('.work-header-reveal', style({
            opacity: 0,
            transform: 'translateY(4px)'
          })),
          query('.work-header-reveal', stagger('200ms', [
            animate('600ms 400ms cubic-bezier(0.6, 0.2, 0.1, 1)', style({
              opacity: 1,
              transform: 'translateY(0)'
            }))
          ]))
        ])
      ])
    ])
  ]
})

export class WorkHeaderComponent implements OnInit {

  public innerWidth: any;
  public tldrProvided:boolean = false;
  public revealWork: string = 'loading';


  @Input() work: Work;
  @Input() subtitle: string;
  @Input() description: string;

  @ViewChild('tldr') tldr:ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 840) {
      this.revealWork = 'loadedMobile';
    } else if (this.innerWidth >= 840) {
      this.revealWork = 'loadedDesktop';
    }
  }

  constructor(
    private route: ActivatedRoute,
    private workService: WorkService,
    private cdRef: ChangeDetectorRef
  ) {}

  getWork(): void {
    const url = this.route.snapshot.routeConfig.path;
    this.workService.getWork(url).subscribe(work => this.work = work);
  }

  checkWidth(): void {

  }

  ngOnInit(): void {
    this.getWork();

    this.innerWidth = window.innerWidth;

    if (this.innerWidth < 840) {
      this.revealWork = 'loadedMobile';
    } else if (this.innerWidth >= 840) {
      this.revealWork = 'loadedDesktop';
    }

    this.cdRef.detectChanges();
  }

  ngAfterContentInit() {
    this.tldrProvided = !!this.tldr.nativeElement.children.length;
  }
}
