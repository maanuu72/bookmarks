import {Action, createReducer, on} from '@ngrx/store';
import * as BookmarkActions from './bookmark.actions';
import {BookmarksState} from '../../app/models/bookmarks-state';

export const bookmarkFeatureKey = 'Bookmark';

export const bookmarksInitialState: BookmarksState = {
  bookmarks: [],
  error: null
};

const bookmarksReducer = createReducer(
  bookmarksInitialState,
  on(BookmarkActions.addBookmark,(state, {newBookmark}) => {
    return {
      ...state,
      bookmarks: [...state.bookmarks, newBookmark]
    };
  }),
  on(BookmarkActions.deleteBookmark, (state, {bookmark}) => {
    return {
      ...state,
      bookmarks: [...state.bookmarks.filter(bookmarks => bookmarks.name !== bookmark.name)]
    };
  })
);

export function reducer(state: BookmarksState | undefined, action: Action) {
  return bookmarksReducer(state, action);
}
