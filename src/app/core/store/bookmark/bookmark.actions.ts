import {createAction, props} from '@ngrx/store';
import {BookmarkData} from '../../../models/bookmark-data';

export enum BookmarkEnum {
  AddBookmark = '[Bookmark] Add Bookmark',
  AddBookmarkSuccess = '[Bookmark] Add Bookmark Success',
  AddBookmarkError = '[Bookmark] Add Bookmark Error',
  DeleteBookmark = '[Bookmark] Delete Bookmark',
  DeleteBookmarkSuccess = '[Bookmark] Delete Bookmark Success',
  DeleteBookmarkError = '[Bookmark] Delete Bookmark Error'
}

export const addBookmark = createAction(
  BookmarkEnum.AddBookmark,
  props<{ newBookmark: BookmarkData }>()
);

export const addBookmarkSuccess = createAction(
  BookmarkEnum.AddBookmarkSuccess,
  props<{ newBookmark: BookmarkData }>()
);

export const addBookmarkError = createAction(
  BookmarkEnum.AddBookmarkError,
  props<{ error }>()
);

export const deleteBookmark = createAction(
  BookmarkEnum.DeleteBookmark,
  props<{ deleteBookmark: BookmarkData }>()
);

export const deleteBookmarkSuccess = createAction(
  BookmarkEnum.DeleteBookmarkSuccess,
  props<{ deleteBookmark: BookmarkData }>()
);

export const deleteBookmarkError = createAction(
  BookmarkEnum.DeleteBookmarkError,
  props<{ error }>()
);
