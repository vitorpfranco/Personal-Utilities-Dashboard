import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos:Todo[]=[];
  constructor() {
    this.loadState()
    fromEvent(window,'storage').subscribe((event: any)=>{
      if(event.key==='todos')this.loadState()
    }) }
  
  getTodos(){
    return this.todos
  }
  
  getTodo(id:String):any {
    return this.todos.find(n=>n.id===id);
  }
  
  addTodo(todo:Todo){
    this.todos.push(todo);
    this.saveState();
  }
  
  updateTodo(id:string, updatedFields:Partial<Todo>){
  const Todo:any = this.getTodo(id);
  Object.assign(Todo, updatedFields);
  this.saveState();
  }
  
  deleteTodo(id:string){
    const index = this.todos.findIndex(todo=> todo.id ==id)
    if(index==-1)return
    this.todos.splice(index,1);
    this.saveState();
  }
  saveState(){
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  loadState(){
    const todosStorage= JSON.parse(localStorage.getItem('todos')!);
    this.todos.length=0;
    this.todos.push(...todosStorage);
  }
  }



