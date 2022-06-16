import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-bookmark-edit',
  templateUrl: './bookmark-edit.component.html',
  styleUrls: ['./bookmark-edit.component.scss']
})
export class BookmarkEditComponent implements OnInit {

  bookmark!: Bookmark
  constructor(private bookmarkService: BookmarkService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap) => {
      const idParam:any = paramMap.get('id')
      this.bookmark =this.bookmarkService.getBookmark(idParam)
    })
  }
  onFormSubmit(form:NgForm):void{

    this.bookmarkService.updateBookmark(this.bookmark.id,form.value);
    this.router.navigateByUrl("/bookmarks");
  }
}
