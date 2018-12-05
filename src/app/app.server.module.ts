import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppLoadingComponent } from './app-shell/app-loading.component';

const routes: Routes = [ { path: 'app-shell-path', component: AppLoadingComponent }];

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  declarations: [AppLoadingComponent],
})
export class AppServerModule {}
