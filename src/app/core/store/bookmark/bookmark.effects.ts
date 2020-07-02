import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as BookmarkActions from './bookmark.actions';

@Injectable()
export class BookmarkEffects {
  private bookmarkProfileKey = 'bookmarks';

  public addBookmark$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookmarkActions.addBookmark),
      mergeMap(action => {
        try {
          return of(BookmarkActions.addBookmarkSuccess({newBookmark: action.newBookmark}));
        } catch (error) {
          return of(BookmarkActions.addBookmarkError({error: error.stack}));
        }
      })
    )
  );

  public deleteBookmark$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookmarkActions.deleteBookmark),
      mergeMap(action => {
        try {
          return of(BookmarkActions.deleteBookmarkSuccess({deleteBookmark: action.deleteBookmark}));
        } catch (error) {
          return of(BookmarkActions.deleteBookmarkError({error: error.stack}));
        }
      })
    )
  );

  constructor(private actions$: Actions) {
  }
}
