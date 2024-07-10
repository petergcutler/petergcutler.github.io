// Angular and Env
import { NgModule } from '@angular/core';
import { EnvServiceProvider } from './env.service.provider';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

// App
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Services
import { WorkService } from './work/work.service';

// External
import { LightgalleryModule } from 'lightgallery/angular';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
// import { RunKitEmbedComponent } from 'angular-runkit'


// Pages
import { AboutComponent } from './about/about.component';
import { WorkListComponent } from './work/work-list/work-list.component';

// Directive-like components
import { NavComponent } from './nav/nav.component';
import { ArticleFooterComponent } from './article-footer/article-footer.component';
import { WorkHeaderComponent } from './work/work-header/work-header.component';

// Era
import { CrowdskoutComponent }              from './work/era-items/crowdskout/crowdskout.component';
import { FleishmanComponent }               from './work/era-items/fleishman/fleishman.component';
import { TrakstarComponent }                from './work/era-items/trakstar/trakstar.component';
import { UwComponent }                      from './work/era-items/uw/uw.component';

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

// Not in use
import { DashboardComponent } from './dashboard/dashboard.component';
import { WritingComponent } from './writing/writing.component';

@NgModule({
  declarations: [
    AppComponent,
    // Pages
    AboutComponent,
    WorkListComponent,
    // Directive
    NavComponent,
    ArticleFooterComponent,
    WorkHeaderComponent,
    // External
    // Era
    CrowdskoutComponent,
    FleishmanComponent,
    TrakstarComponent,
    UwComponent,
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
    VoxGlobalMotionDesignComponent,
    // Unused
    DashboardComponent,
    WritingComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LightgalleryModule,
    NgxPageScrollCoreModule.forRoot(
      // { /* custom settings here */ }
      {
        scrollOffset: 125,
        duration: 800,
        easingLogic:
          (t: number, b: number, c: number, d: number): number => {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t*t*t + 2) + b;
          }
      }
    ),
    NgxPageScrollModule,
  ],
  providers: [
    EnvServiceProvider,
    WorkService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
