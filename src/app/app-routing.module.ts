import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

const routes: Routes = [
  {path: 'booksmarks', component: BookmarksComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'notes/add', component: AddNoteComponent},
  {path: 'notes/:id', component: EditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
