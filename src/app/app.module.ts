import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// ngrx, store and reducers
import { StoreModule, combineReducers } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';

// router
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';

// redux router binding
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './store/router';
import { PromiseExampleComponent } from './promise-example/promise-example.component';

import { PromiseService } from './shared/promise.service';
import { HttpModule } from '@angular/http';
import { FourthPageComponent } from './fourth-page/fourth-page.component';

import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { SpaceObservablesService } from "./shared/space-observables.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromiseExampleComponent,
    FourthPageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers), // add met reducers here
    StoreDevtoolsModule.instrument(),
    RouterModule.forRoot(appRoutes,
      { enableTracing: true } // debugging purposes only
    ),
    StoreRouterConnectingModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
   /**
    * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
    * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
    * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
    */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    PromiseService,
    SpaceObservablesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
