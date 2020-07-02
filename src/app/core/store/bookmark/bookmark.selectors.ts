import {createFeatureSelector, createSelector} from '@ngrx/store';
import {bookmarkFeatureKey, BookmarksState} from './bookmark.reducer';

export const getBookmarksState = createFeatureSelector<BookmarksState>(
  bookmarkFeatureKey
);

export const getBookmarksList = createSelector(
  getBookmarksState,
  (state: BookmarksState) => state.bookmarks.list
);
