import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule as CmEditorAppModule } from '../../projects/dashboard/src/app/app.module';
import { AppModule as CmDashboardAppModule } from '../../projects/editor/src/app/app.module';
import { AppModule as CmPublicAppModule } from '../../projects/public/src/app/app.module';
import { CmModule } from '../../projects/cm/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CmModule,
    CmPublicAppModule,
    CmEditorAppModule,
    CmDashboardAppModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
