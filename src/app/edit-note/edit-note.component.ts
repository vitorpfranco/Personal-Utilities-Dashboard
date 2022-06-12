import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Note } from '../shared/note.model';
import { NoteService } from '../shared/note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

note!:Note;
  constructor(private route: ActivatedRoute, private noteService: NoteService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap) => {
      const idParam:any = paramMap.get('id')
      const note = this.noteService.getNote(idParam)
      console.log(idParam)
      console.log(note)
    })
  }

}
