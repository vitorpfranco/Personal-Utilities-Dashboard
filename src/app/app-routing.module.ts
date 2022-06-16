import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { NotesComponent } from './notes/notes.component';
import { TodosComponent } from './todos/todos.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { TodoAddComponent } from './todo-add/todo-add.component'
import { TodoEditComponent } from './todo-edit/todo-edit.component'

const routes: Routes = [
  {path: 'booksmarks', component: BookmarksComponent},
  {path: 'todos', component: TodosComponent},
  {path: 'notes', component: NotesComponent},
  {path: 'notes/add', component: AddNoteComponent},
  {path: 'notes/:id', component: EditNoteComponent},
  {path: 'todos/add', component: TodoAddComponent},
  {path: 'todos/:id', component: TodoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
