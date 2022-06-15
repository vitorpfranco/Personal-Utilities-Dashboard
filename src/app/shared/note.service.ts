import { Injectable } from '@angular/core';
import {Note} from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
notes: Note[] = [];
  constructor() { }

getNotes(){
  return this.notes
}

getNote(id:String):any {
  return this.notes.find(n=>n.id===id);
}

addNote(note:Note){
  this.notes.push(note);
}

updateNote(id:string, updatedFields:Partial<Note>){
const note:any = this.getNote(id);
Object.assign(note, updatedFields)
}

deleteNote(id:string){
  this.notes= this.notes.filter(x => x.id !== id)
}
}
