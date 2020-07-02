import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {BookmarkData} from '../../models/bookmark-data';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {BookmarkStoreService} from '../../core/store/bookmark/bookmark.service';

@Component({
  selector: 'app-bookmark-table',
  templateUrl: './bookmark-table.component.html',
  styleUrls: ['./bookmark-table.component.scss']
})
export class BookmarkTableComponent implements OnInit {

  bookmarks$: Observable<BookmarkData[]>;
  bookmarks: MatTableDataSource<BookmarkData>;

  displayedColumns = ['name', 'url', 'group'];

  paginator: MatPaginator;
  sort: MatSort;

  @ViewChild(MatPaginator, {static: false}) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatSort, {static: false}) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  protected setDataSourceAttributes() {
    this.bookmarks.paginator = this.paginator;
    this.bookmarks.sort = this.sort;
  }

  constructor(private bookmarkStoreService: BookmarkStoreService) {
  }

  ngOnInit(): void {
    this.bookmarks$ = this.bookmarkStoreService.getBookmarks$();
    this.bookmarks$.subscribe(data => this.bookmarks = new MatTableDataSource(data));
  }

  filter(event) {
    this.bookmarks.filter = event.value.trim().toLocaleLowerCase();
  }

}
