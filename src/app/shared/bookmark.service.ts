import { Injectable } from '@angular/core';
import {Bookmark } from '../shared/bookmark.model'

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
bookmarks!:Bookmark[]
  constructor() { }

getBookmarks():Bookmark[] {
  return this.bookmarks
}
getBookmark(id:string):any {
  return this.bookmarks.find(bookmark => bookmark.id === id)
}
addBookmark(bookmark:Bookmark):void {
   this.bookmarks.push(bookmark);
}
updateBookmark(id:string, updatedFields: Partial<Bookmark>):void{
  const bookmark:any = this.getBookmark(id);
  Object.assign(bookmark, updatedFields)
}
deleteBookmark(id:string):void{
  const index = this.bookmarks.findIndex(bookmark=> bookmark.id ==id)
  if(index==-1)return
  this.bookmarks.splice(index,1)
}
}
