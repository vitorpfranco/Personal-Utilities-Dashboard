import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  todo!:Todo;
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

submittry:boolean = false;
onFormSubmit(form:NgForm):void{
if(form.invalid){
  this.submittry=true
  return}
this.todo = new Todo(form.value.text);
this.todoService.addTodo(this.todo)
this.submittry=false
this.router.navigateByUrl("/todos")}
}
