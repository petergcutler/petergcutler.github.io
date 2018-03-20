import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }   from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WritingComponent } from './writing/writing.component';

import { WorkListComponent } from './work/work-list/work-list.component';
import { WorkDetailsComponent } from './work/work-details/work-details.component';

const routes: Routes = [
  // Available if you want to create an independent homepage "dashboard"
  // {
  //   path: '',
  //   component: DashboardComponent
  // },
  // Redirect homepage to about for now
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'work',
    component: WorkListComponent
  },
  {
    path: 'work/:url',
    component: WorkDetailsComponent
  },
  {
    path: 'writing',
    component: WritingComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
