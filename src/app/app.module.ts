import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkDetailsComponent } from './work-details/work-details.component';

import { WorkService } from './work.service';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { WritingComponent } from './writing/writing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleFooterComponent } from './article-footer/article-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkListComponent,
    WorkDetailsComponent,
    AboutComponent,
    CvComponent,
    WritingComponent,
    DashboardComponent,
    ArticleHeaderComponent,
    ArticleFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WorkService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
