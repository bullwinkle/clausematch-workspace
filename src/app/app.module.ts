import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CmModule } from 'cm';
import { AppModule as CmEditorAppModule } from '../../projects/dashboard/src/app/app.module';
import { AppModule as CmDashboardAppModule } from '../../projects/editor/src/app/app.module';
import { AppModule as CmPublicAppModule } from '../../projects/public/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CmModule,
    CmPublicAppModule,
    CmEditorAppModule,
    CmDashboardAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
