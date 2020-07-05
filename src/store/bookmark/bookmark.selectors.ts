import {createFeatureSelector, createSelector} from '@ngrx/store';
import {bookmarkFeatureKey} from './bookmark.reducer';
import {BookmarksState} from '../../app/models/bookmarks-state';

export const getBookmarksState = createFeatureSelector<BookmarksState>(
  bookmarkFeatureKey
);

export const getBookmarks = createSelector(
  getBookmarksState,
  (state: BookmarksState) => state.bookmarks
);
