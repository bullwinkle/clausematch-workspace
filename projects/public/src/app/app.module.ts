import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CmModule } from 'cm';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CmModule,
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
