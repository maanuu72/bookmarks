import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookmarkStoreService} from '../../core/store/bookmark/bookmark.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ModalInfoComponent} from '../../shared/modal-info/modal-info.component';

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
    this.dialog.open(ModalInfoComponent, {
      data: {
        tipo: 'confirm',
        msg: `Are you sure?`
      },
      width: '350px'
    }).afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.router.navigate(['']);
      }
    });
  }

  onSubmit() {
    if (this.bookmarkForm.valid) {
      const bookmark = {
        name: this.bookmarkForm.controls.name.value,
        url: this.bookmarkForm.controls.url.value,
        group: this.bookmarkForm.controls.group.value,
      }
      this.bookmarkStoreService.addBookmark(bookmark);
      this.dialog.open(ModalInfoComponent, {
        data: {
          tipo: 'success',
          msg: `Bookmark created`
        },
        width: '350px'
      }).afterClosed().subscribe(result => {
        this.router.navigate(['']);
      });
    }
  }
}
