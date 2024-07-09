import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Work } from './work-schema';
import { WORKS } from './works';

import { Era } from './era-schema';
import { ERAS } from './works';


@Injectable()
export class WorkService {

  constructor() {}

  getWork(url: string): Observable<Work> {
    return of(WORKS.find(work => work.url === url));
  }

  getWorks(): Observable<Work[]> {
    return of(WORKS);
  }

  filterWorks(client: string): Observable<Work[]> {
    return of(WORKS.filter(work => work.client === client));
  }

  getEra(url: string): Observable<Era> {
    return of(ERAS.find(era => era.url === url));
  }

  getEras(): Observable<Era[]> {
    return of(ERAS);
  }

}
