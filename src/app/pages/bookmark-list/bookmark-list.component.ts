import {Component, OnInit} from '@angular/core';
import {BookmarkData} from '../../models/bookmark-data';
import {Observable} from 'rxjs';
import {BookmarkStoreService} from '../../core/store/bookmark/bookmark.service';
import {ModalInfoComponent} from '../../shared/modal-info/modal-info.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  bookmarks$: Observable<BookmarkData[]>;
  bookmarkGroups;

  constructor(private bookmarkStoreService: BookmarkStoreService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.bookmarks$ = this.bookmarkStoreService.getBookmarks$();
    this.bookmarks$.subscribe(data => {
      this.bookmarkGroups = {};
      data.forEach(element => {
        let group = element.group;
        if(group == null || group.length == 0 ) {
          group = 'Without group';
        }
        if (this.bookmarkGroups[group] === undefined) {
          this.bookmarkGroups[group] = [];
        }
        this.bookmarkGroups[group].push(element)
      })
    });
  }
  delete(bookmark){
    this.dialog.open(ModalInfoComponent, {
      data: {
        tipo: 'confirm',
        msg: `Are you sure?`
      },
      width: '350px'
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.bookmarkStoreService.deleteBookmark(bookmark);
      }
    });
  }
}
