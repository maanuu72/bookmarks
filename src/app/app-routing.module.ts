import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookmarkListComponent} from './pages/bookmark-list/bookmark-list.component';
import {BookmarkFormComponent} from './pages/bookmark-form/bookmark-form.component';
import {BookmarkTableComponent} from './pages/bookmark-table/bookmark-table.component';


const routes: Routes = [
  {
    path: '',
    component: BookmarkListComponent
  },
  {
    path: 'table',
    component: BookmarkTableComponent
  },
  {
    path: 'form',
    component: BookmarkFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
