import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CmModule } from 'cm';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CmModule,
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
