import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crowdskout-segmenting',
  templateUrl: './crowdskout-segmenting.component.html',
  styleUrls: ['./crowdskout-segmenting.component.scss']
})

export class CrowdskoutSegmentingComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  public csProfileImages: object[] = [
    {
      path: '../assets/images/work/crowdskout-segmenting/segmenting-0a.png',
      description: 'Demographics fields of a Crowdskout profile'
    },
    {
      path: '../assets/images/work/crowdskout-segmenting/segmenting-0b.png',
      description: 'Activity fields from a Crowdskout profile'
    }
  ];

  public csSegmentingImages: object[] = [
    {
      path: '../assets/images/work/crowdskout-segmenting/segmenting-1a.png',
      description: 'Users can explore and drill-down into criteria to build a segment'
    },
    {
      path: '../assets/images/work/crowdskout-segmenting/segmenting-2a.png',
      description: 'As users select criteria to segment on, their selections appear, and their profiles filter to the matching criteria'
    },
    {
      path: '../assets/images/work/crowdskout-segmenting/segmenting-3a.png',
      description: 'Power users may write complex segments using CQL strings - a variant of SQL parsed by Crowdskout'
    },
    {
      path: '../assets/images/work/crowdskout-segmenting/segmenting-4a.png',
      description: 'Users immediately see statistics about their segments\' usable data and demographics. They may create unique graphs to see other detailed statistics about their segments.'
    }
  ];
}
