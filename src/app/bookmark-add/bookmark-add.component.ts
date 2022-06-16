import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from '../shared/bookmark.model';
import { BookmarkService } from '../shared/bookmark.service';

@Component({
  selector: 'app-bookmark-add',
  templateUrl: './bookmark-add.component.html',
  styleUrls: ['./bookmark-add.component.scss']
})
export class BookmarkAddComponent implements OnInit {
bookmark!:Bookmark;
  constructor(private bookmarkService: BookmarkService, private router: Router) { }

  ngOnInit(): void {
  }

submittry:boolean = false;
onFormSubmit(form:NgForm):void{
if(form.invalid){
  this.submittry=true
  return}
this.bookmark = new Bookmark(form.value.title, form.value.url);
this.bookmarkService.addBookmark(this.bookmark)
this.submittry=false
this.router.navigateByUrl("/bookmarks")}
}
