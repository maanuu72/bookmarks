import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookmarkStoreService} from '../../../store/bookmark/bookmark.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ModalInfoComponent} from '../../shared/modal-info/modal-info.component';
import {ModalData} from '../../models/modal-data';
import {BookmarkData} from '../../models/bookmark-data';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss']
})
export class BookmarkFormComponent implements OnInit {

  bookmarkForm: FormGroup;

  constructor(private bookmarkStoreService: BookmarkStoreService, private router: Router, private dialog: MatDialog) {
    this.bookmarkForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      url: new FormControl(null, [Validators.required]),
      group: new FormControl(null)
    });
  }

  ngOnInit(): void {
  }

  cancel() {
    const modalData: ModalData = {
      type: 'confirm',
      msg: `Are you sure?`
    };

    this.dialog.open(ModalInfoComponent, {
      data: modalData,
      width: '350px'
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.router.navigate(['']);
      }
    });
  }

  submit() {
    if (this.bookmarkForm.valid) {
      const bookmark: BookmarkData = {
        name: this.bookmarkForm.controls.name.value,
        url: this.bookmarkForm.controls.url.value,
        group: this.bookmarkForm.controls.group.value,
      }
      this.bookmarkStoreService.addBookmark(bookmark);

      const modalData: ModalData = {
        type: 'success',
        msg: `Bookmark created`
      };

      this.dialog.open(ModalInfoComponent, {
        data: modalData,
        width: '350px'
      }).afterClosed().subscribe(result => {
        this.router.navigate(['']);
      });
    }
  }
}
