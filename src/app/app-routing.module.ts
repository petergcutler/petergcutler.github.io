// Core
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { AboutComponent }       from './about/about.component';
import { WorkListComponent }    from './work/work-list/work-list.component';

// Unused
import { DashboardComponent }   from './dashboard/dashboard.component';
import { WritingComponent }     from './writing/writing.component';

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

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
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
        children: [
          // Era
          { path: 'crowdskout',                component: CrowdskoutComponent },
          { path: 'fleishman',                 component: FleishmanComponent },
          { path: 'trakstar',                  component: TrakstarComponent },
          { path: 'uw',                        component: UwComponent },
          // Work
          { path: '',                          component: WorkListComponent },
          { path: 'uw-secure-storage',         component: UwSecureStorageComponent },
          { path: 'uw-oculus-onboarding',      component: UwOculusOnboardingComponent },
          { path: 'vox-global-motion-design',  component: VoxGlobalMotionDesignComponent },
          { path: 'uw-complex-systems',        component: UwComplexSystemsComponent },
          { path: 'uw-yarn',                   component: UwYarnComponent },
          { path: 'crowdskout-data-viz',       component: CrowdskoutDataVizComponent },
          { path: 'crowdskout-datetime',       component: CrowdskoutDatetimeComponent },
          { path: 'crowdskout-form-editor',    component: CrowdskoutFormEditorComponent },
          { path: 'crowdskout-segmenting',     component: CrowdskoutSegmentingComponent },
          { path: 'vox-global-brand-redesign', component: VoxGlobalBrandRedesignComponent },
          { path: 'vox-global-att-csr',        component: VoxGlobalAttCsrComponent }
        ]
      }
    ]
  },
  // Available if you want to add a writing portfolio
  // {
  //   path: 'writing',
  //   component: WritingComponent
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
