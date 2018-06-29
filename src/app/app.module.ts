// Angular
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
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

// Work
import { UwSecureStorageComponent }         from './work/work-items/uw-secure-storage/uw-secure-storage.component';
import { UwOculusOnboardingComponent }      from './work/work-items/uw-oculus-onboarding/uw-oculus-onboarding.component';
import { UwComplexSystemsComponent }        from './work/work-items/uw-complex-systems/uw-complex-systems.component';
import { UwYarnComponent }                  from './work/work-items/uw-yarn/uw-yarn.component';
import { CrowdskoutDataVizComponent }       from './work/work-items/crowdskout-data-viz/crowdskout-data-viz.component';
import { CrowdskoutDatetimeComponent }      from './work/work-items/crowdskout-datetime/crowdskout-datetime.component';
import { CrowdskoutFormEditorComponent }    from './work/work-items/crowdskout-form-editor/crowdskout-form-editor.component';
import { CrowdskoutSegmentingComponent }    from './work/work-items/crowdskout-segmenting/crowdskout-segmenting.component';
import { VoxGlobalAttCsrComponent }         from './work/work-items/vox-global-att-csr/vox-global-att-csr.component';
import { VoxGlobalBrandRedesignComponent }  from './work/work-items/vox-global-brand-redesign/vox-global-brand-redesign.component';
import { VoxGlobalMotionDesignComponent }   from './work/work-items/vox-global-motion-design/vox-global-motion-design.component';

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
    DashboardComponent,
    // Work
    UwSecureStorageComponent,
    UwOculusOnboardingComponent,
    UwComplexSystemsComponent,
    UwYarnComponent,
    CrowdskoutDataVizComponent,
    CrowdskoutDatetimeComponent,
    CrowdskoutFormEditorComponent,
    CrowdskoutSegmentingComponent,
    VoxGlobalAttCsrComponent,
    VoxGlobalBrandRedesignComponent,
    VoxGlobalMotionDesignComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
