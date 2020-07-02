import { Component } from '@angular/core';
import {BookmarkStoreService} from './core/store/bookmark/bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookmarks';

  info = [
    {name: 'Facebook', url: 'https://www.facebook.com/', group: 'Social'},
    {name: 'Twitter', url: 'https://twitter.com/explore', group: 'Social'},
    {name: 'DGT', url: 'http://www.dgt.es/es/', group: 'Gobernment'},
    {name: 'Ministerio de Interior', url: 'http://www.interior.gob.es/', group: 'Gobernment'},
    {name: 'Jet Brains', url: 'https://www.jetbrains.com/', group: 'Tools'},
    {name: 'Store devtools', url: 'https://ngrx.io/guide/store-devtools', group: 'Tools'}
  ];

  constructor(private bookmarkStoreService: BookmarkStoreService) {
    this.info.forEach(bookmark => this.bookmarkStoreService.addBookmark(bookmark));
  }
}
