import { Component, OnInit, Input} from '@angular/core';
import { Bookmark } from '../shared/bookmark.model';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {
@Input() bookmark!:Bookmark;
faviconError!:boolean
titleIconSrc!:string;
  constructor() { }

  ngOnInit(): void {
    this.titleIconSrc= this.bookmark.url + 'favicon.ico'
  }

}
