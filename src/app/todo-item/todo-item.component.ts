import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
@Input() todo!:Todo;
@Output() 
editClick:EventEmitter<void> = new EventEmitter();
@Output() 
deleteClick:EventEmitter<void> = new EventEmitter();

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }
  onEditClick(){
    this.editClick.emit();
  }
  onDeleteClick(){
    this.deleteClick.emit();
  }
}
