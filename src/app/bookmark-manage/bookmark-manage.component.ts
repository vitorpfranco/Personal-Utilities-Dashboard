import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-bookmark-manage',
  templateUrl: './bookmark-manage.component.html',
  styleUrls: ['./bookmark-manage.component.scss']
})
export class BookmarkManageComponent implements OnInit {
bookmarks!:Bookmark[]
  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarks= this.bookmarkService.getBookmarks();
  }

}
