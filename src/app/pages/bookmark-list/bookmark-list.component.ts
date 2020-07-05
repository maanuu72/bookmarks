import {Component, OnInit} from '@angular/core';
import {BookmarkData} from '../../models/bookmark-data';
import {Observable} from 'rxjs';
import {BookmarkStoreService} from '../../../store/bookmark/bookmark.service';
import {ModalInfoComponent} from '../../shared/modal-info/modal-info.component';
import {MatDialog} from '@angular/material/dialog';
import {ModalData} from '../../models/modal-data';
import {BookmarkGroup} from '../../models/bookmark-group';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  bookmarks$: Observable<BookmarkData[]>;
  bookmarkGroups: BookmarkGroup;

  constructor(private bookmarkStoreService: BookmarkStoreService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.bookmarks$ = this.bookmarkStoreService.getBookmarks$();
    this.bookmarks$.subscribe((data: BookmarkData[]) => {
      this.bookmarkGroups = {};
      data.forEach((bookmark: BookmarkData) => {
        let group = bookmark.group;
        if (group === null || group.length === 0) {
          group = 'Without group';
        }
        if (this.bookmarkGroups[group] === undefined) {
          this.bookmarkGroups[group] = [];
        }
        this.bookmarkGroups[group].push(bookmark)
      })
    });
  }

  delete(bookmark: BookmarkData) {
    const modalData: ModalData = {
      type: 'confirm',
      msg: `Are you sure?`
    };

    this.dialog.open(ModalInfoComponent, {
      data: modalData,
      width: '350px'
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.bookmarkStoreService.deleteBookmark(bookmark);
      }
    });
  }
}
