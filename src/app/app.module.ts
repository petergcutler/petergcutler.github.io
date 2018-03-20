// Angular
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';


// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Services
import { WorkService } from './work/work.service';

// Pages
import { AboutComponent } from './about/about.component';
import { WorkListComponent } from './work/work-list/work-list.component';
import { WritingComponent } from './writing/writing.component';
import { WorkDetailsComponent } from './work/work-details/work-details.component';

// 'directives'
import { WorkContentComponent } from './work/work-content/work-content.component';
import { ArticleHeaderComponent } from './article-header/article-header.component';
import { ArticleFooterComponent } from './article-footer/article-footer.component';

// Not in use
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkListComponent,
    WritingComponent,
    WorkDetailsComponent,
    WorkContentComponent,
    ArticleHeaderComponent,
    ArticleFooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // CommonModule,
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
