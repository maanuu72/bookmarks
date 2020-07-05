import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import {metaReducers, reducers} from '../store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';

import * as fromBookmark from '../store/bookmark/bookmark.reducer';
import {BookmarkEffects} from '../store/bookmark/bookmark.effects';
import {BookmarkListComponent} from './pages/bookmark-list/bookmark-list.component';
import {BookmarkFormComponent} from './pages/bookmark-form/bookmark-form.component';

import {ModalInfoComponent} from './shared/modal-info/modal-info.component';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {BookmarkTableComponent} from './pages/bookmark-table/bookmark-table.component';
import {CdkColumnDef} from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkListComponent,
    BookmarkFormComponent,
    ModalInfoComponent,
    BookmarkTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
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
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [
    MatDialogModule,
  ],
  entryComponents: [
    ModalInfoComponent
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule {
}
