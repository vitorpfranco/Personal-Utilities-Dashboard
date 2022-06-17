import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import {Bookmark } from '../shared/bookmark.model'

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
bookmarks:Bookmark[]=[];
  constructor() { 
    this.loadState()
    fromEvent(window,'storage').subscribe((event: any)=>{
      if(event.key==='bookmarks')this.loadState()
    })
  }

getBookmarks():Bookmark[] {
  return this.bookmarks
}
getBookmark(id:string):any {
  return this.bookmarks.find(bookmark => bookmark.id === id)
}
addBookmark(bookmark:Bookmark):void {
   this.bookmarks.push(bookmark);
   this.saveState();
}
updateBookmark(id:string, updatedFields: Partial<Bookmark>):void{
  const bookmark:any = this.getBookmark(id);
  Object.assign(bookmark, updatedFields)
  this.saveState();
}
deleteBookmark(id:string):void{
  const index = this.bookmarks.findIndex(bookmark=> bookmark.id ==id)
  if(index==-1)return
  this.bookmarks.splice(index,1)
  this.saveState();
}
saveState(){
  localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks))
}
loadState(){
  const bookmarksStorage= JSON.parse(localStorage.getItem('bookmarks')!);
  this.bookmarks.length=0;
  this.bookmarks.push(...bookmarksStorage);
}


}
