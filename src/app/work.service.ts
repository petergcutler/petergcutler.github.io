import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Work } from './work-list';
import { WORKS } from './work-items';

@Injectable()
export class WorkService {

  constructor() {}

  getWork(id: number): Observable<Work> {
    return of(WORKS.find(work => work.id === id));
  }

  getWorks(): Observable<Work[]> {
    return of(WORKS);
  }
}
