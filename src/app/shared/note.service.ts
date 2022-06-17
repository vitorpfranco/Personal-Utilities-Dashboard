import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import {Note} from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
notes: Note[] = [];
  constructor() {
  this.loadState()
  fromEvent(window,'storage').subscribe((event: any)=>{
    if(event.key==='notes')this.loadState()
  })
  }

getNotes(){
  return this.notes
}

getNote(id:String):any {
  return this.notes.find(n=>n.id===id);
}

addNote(note:Note){
  this.notes.push(note);
  this.saveState();
}

updateNote(id:string, updatedFields:Partial<Note>){
const note:any = this.getNote(id);
Object.assign(note, updatedFields)
this.saveState();
}

deleteNote(id:string){
  this.notes= this.notes.filter(x => x.id !== id)
  this.saveState();
}
saveState(){
  localStorage.setItem('notes', JSON.stringify(this.notes))
}
loadState(){
  const notesStorage= JSON.parse(localStorage.getItem('notes')!);
  this.notes.length=0;
  this.notes.push(...notesStorage);
}
}
