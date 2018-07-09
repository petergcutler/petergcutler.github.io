import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crowdskout-data-viz',
  templateUrl: './crowdskout-data-viz.component.html',
  styleUrls: ['./crowdskout-data-viz.component.scss']
})

export class CrowdskoutDataVizComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  public csDataVizImages: object[] = [
    {
      path: '../assets/images/work/crowdskout-data-viz/viz-1a.png',
      description: 'A user may select a custom segment of their data to include in the graph'
    },
    {
      path: '../assets/images/work/crowdskout-data-viz/viz-2a.png',
      description: 'They may select from a range of hundreds of different criteria to graph'
    },
    {
      path: '../assets/images/work/crowdskout-data-viz/viz-3a.png',
      description: 'Depending on their prior selections, they may graph comparison, composition, or time-series graphs'
    },
    {
      path: '../assets/images/work/crowdskout-data-viz/viz-4a.png',
      description: 'Users can control what style of graph they select, and toggle between options to compare'
    },
    {
      path: '../assets/images/work/crowdskout-data-viz/viz-5a.png',
      description: 'Alternatively, they may select a table to customize'
    },
    {
      path: '../assets/images/work/crowdskout-data-viz/viz-6a.png',
      description: 'The graph may be exported, or displayed elsewhere in Crowdskout for easy monitoring'
    }
  ];

}
