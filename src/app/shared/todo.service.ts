import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos:Todo[]=[];
  constructor() { }
  
  getTodos(){
    return this.todos
  }
  
  getTodo(id:String):any {
    return this.todos.find(n=>n.id===id);
  }
  
  addTodo(todo:Todo){
    this.todos.push(todo);
  }
  
  updateTodo(id:string, updatedFields:Partial<Todo>){
  const Todo:any = this.getTodo(id);
  Object.assign(Todo, updatedFields)
  }
  
  deleteTodo(id:string){
    const index = this.todos.findIndex(todo=> todo.id ==id)
    if(index==-1)return
    this.todos.splice(index,1)
  }
}


