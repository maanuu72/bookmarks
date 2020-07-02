import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './core/store/reducers';
import {environment} from './core/environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';

import * as fromBookmark from './core/store/bookmark/bookmark.reducer';
import {BookmarkEffects} from './core/store/bookmark/bookmark.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({routerState: RouterState.Minimal}),
    StoreModule.forFeature(
      fromBookmark.bookmarkFeatureKey,
      fromBookmark.reducer
    ),
    EffectsModule.forFeature([BookmarkEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
