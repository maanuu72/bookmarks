import {Action, createReducer, on} from '@ngrx/store';
import * as BookmarkActions from './bookmark.actions';
import {BookmarksData} from '../../../models/bookmark-data';

export const bookmarkFeatureKey = 'Bookmark';

export interface BookmarksState {
  bookmarks: BookmarksData;
  error;
}

export const bookmarksInitialState: BookmarksState = {
  bookmarks: {list: []},
  error: null
};

const bookmarksReducer = createReducer(
  bookmarksInitialState,
  on(BookmarkActions.addBookmark,(state, {newBookmark}) => {
    return {
      ...state,
      bookmarks: {
        ...state.bookmarks,
        list: [...state.bookmarks.list, newBookmark]
      }
    };
  }),
  on(BookmarkActions.deleteBookmark, (state, {deleteBookmark}) => {
    return {
      ...state,
      bookmarks: {
        ...state.bookmarks,
        list: [...state.bookmarks.list.filter(bookmarks => bookmarks.name !== deleteBookmark.name)]
      }
    };
  })
);

export function reducer(state: BookmarksState | undefined, action: Action) {
  return bookmarksReducer(state, action);
}
