import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { SwiperCard } from '../../../swipercard.model';

@Component({
  selector: 'app-crowdskout-data-viz',
  templateUrl: './crowdskout-data-viz.component.html',
  styleUrls: ['./crowdskout-data-viz.component.scss']
})

export class CrowdskoutDataVizComponent implements AfterViewInit {

  // constructor() {}

  // ngOnInit() {}

  // public csDataVizImages: object[] = [
  //   {
  //     path: '../assets/images/work/crowdskout-data-viz/viz-1a.png',
  //     description: 'A user may select a custom segment of their data to include in the graph'
  //   },
  //   {
  //     path: '../assets/images/work/crowdskout-data-viz/viz-2a.png',
  //     description: 'They may select from a range of hundreds of different criteria to graph'
  //   },
  //   {
  //     path: '../assets/images/work/crowdskout-data-viz/viz-3a.png',
  //     description: 'Depending on their prior selections, they may graph comparison, composition, or time-series graphs'
  //   },
  //   {
  //     path: '../assets/images/work/crowdskout-data-viz/viz-4a.png',
  //     description: 'Users can control what style of graph they select, and toggle between options to compare'
  //   },
  //   {
  //     path: '../assets/images/work/crowdskout-data-viz/viz-5a.png',
  //     description: 'Alternatively, they may select a table to customize'
  //   },
  //   {
  //     path: '../assets/images/work/crowdskout-data-viz/viz-6a.png',
  //     description: 'The graph may be exported, or displayed elsewhere in Crowdskout for easy monitoring'
  //   }
  // ];


  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  contents: SwiperCard[] = [
    {
      title: 'Computer',
      description: 'Description about computer...',
      url: 'https://picsum.photos/id/1/640/480',
    },
    {
      title: 'Building',
      description: 'Building description...',
      url: 'https://picsum.photos/id/101/640/480',
    },
    {
      title: 'Glass over a computer',
      description: 'Description of a glass over a computer',
      url: 'https://picsum.photos/id/201/640/480',
    },
    {
      title: 'Autumn',
      description: 'Description about autumn leaves',
      url: 'https://picsum.photos/id/301/640/480',
    },
    {
      title: 'Balloon',
      description: 'Coloured balloon',
      url: 'https://picsum.photos/id/401/640/480',
    },
  ];

  index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    spaceBetween: 10,
    navigation: true,
  };

  swiperThumbsConfig: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  };


  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
    this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }

}
