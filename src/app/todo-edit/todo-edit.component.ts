import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  todo!:Todo;
    constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }
  
    ngOnInit(): void {
      this.route.paramMap.subscribe((paramMap:ParamMap) => {
        const idParam:any = paramMap.get('id')
        this.todo =this.todoService.getTodo(idParam)
      })
    }
    onFormSubmit(form:NgForm):void{
      this.todoService.updateTodo(this.todo.id,form.value);
      this.router.navigateByUrl("/todos");
    }
  }
  