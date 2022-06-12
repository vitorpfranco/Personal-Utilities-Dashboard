import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
  }

  submittry:boolean = false;
onFormSubmit(form:NgForm):void{
  console.log(form)
if(form.invalid){
  this.submittry=true
  return}
const note = new Note(form.value.title, form.value.content);
this.noteService.addNote(note)
this.submittry=false
this.router.navigateByUrl("/notes")}
}

