import {BookmarkData} from './bookmark-data';

export interface BookmarksState {
  bookmarks: BookmarkData[];
  error;
}
