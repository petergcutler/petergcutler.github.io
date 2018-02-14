import { Component, OnInit } from '@angular/core';

import { Work } from '../work-list';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})

export class WorkListComponent implements OnInit {

  works: Work[];

  // colors = [
  //   '#1abc9c', // aloha green
  //   '#2ecc71', // ufo green
  //   '#3498db', // dayflower blue
  //   '#9b59b6', // deep lilac purple
  //   '#34495e', // dark denim blue
  //   '#f1c40f', // tanned leather yellow
  //   '#e67e22', // dark cheddar orange
  //   '#e74c3c', // carmine pink red
  // ];

  colors = [
    '#BF9A00', // light greenish blue green
    '#f5cd79', // summertime yellow
    '#74b9ff', // green darner tail blue
    '#a29bfe', // shy moment purple
    '#fab1a0', // first date pink
    '#ff7675', // pink glamour pink
    '#fd79a8', // piko eight pink
    '#f3a683', // creamy peach pink
    '#63cdda', // squeaky blue
  ];

  constructor(private workService: WorkService) { }

  ngOnInit() {
    this.getWorks();
  }

  getWorks(): void {
    this.workService.getWorks()
        .subscribe(works => this.works = works);
  }
}
