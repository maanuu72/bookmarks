import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as BookmarkActions from './bookmark.actions';
import * as BookmarkSelectors from './bookmark.selectors';
import {BookmarkData, BookmarksData} from '../../../models/bookmark-data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookmarkStoreService {
  constructor(private store: Store<BookmarksData>) {
  }

  public addBookmark(newBookmark: BookmarkData) {
    this.store.dispatch(
      BookmarkActions.addBookmark({
        newBookmark: {...newBookmark}
      })
    );
  }

  public deleteBookmark(deleteBookmark: BookmarkData) {
    this.store.dispatch(
      BookmarkActions.deleteBookmark({
        deleteBookmark: {...deleteBookmark}
      })
    );
  }

  public getBookmarks$(): Observable<BookmarkData[]> {
    return this.store.select(BookmarkSelectors.getBookmarksList);
  }
}
