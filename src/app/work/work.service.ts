import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Work } from './work-schema';
import { WORKS } from './works';

@Injectable()
export class WorkService {

  constructor() {}

  getWork(url: string): Observable<Work> {
    return of(WORKS.find(work => work.url === url));
  }

  getWorks(): Observable<Work[]> {
    return of(WORKS);
  }
}
