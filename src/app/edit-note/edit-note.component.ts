import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

note!:Note;
  constructor(private route: ActivatedRoute, private noteService: NoteService, private router: Router,private NotificationService: NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap) => {
      const idParam:any = paramMap.get('id')
      this.note =this.noteService.getNote(idParam)
    })
  }
  onFormSubmit(form:NgForm):void{
    this.noteService.updateNote(this.note.id,form.value);
    this.router.navigateByUrl("/notes");
    this.NotificationService.show("Nota editada!")

  }
  DeleteNote() {
    this.noteService.deleteNote(this.note.id);
    this.router.navigateByUrl("/notes");
    this.NotificationService.show("Nota excluida!")
  }
}
