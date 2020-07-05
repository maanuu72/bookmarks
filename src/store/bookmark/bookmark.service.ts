import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as BookmarkActions from './bookmark.actions';
import * as BookmarkSelectors from './bookmark.selectors';
import {BookmarkData} from '../../app/models/bookmark-data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BookmarkStoreService {
  constructor(private store: Store<BookmarkData[]>) {
  }

  public addBookmark(newBookmark: BookmarkData) {
    this.store.dispatch(
      BookmarkActions.addBookmark({
        newBookmark: {...newBookmark}
      })
    );
  }

  public deleteBookmark(bookmark: BookmarkData) {
    this.store.dispatch(
      BookmarkActions.deleteBookmark({
        bookmark: {...bookmark}
      })
    );
  }

  public getBookmarks$(): Observable<BookmarkData[]> {
    return this.store.select(BookmarkSelectors.getBookmarks);
  }
}
