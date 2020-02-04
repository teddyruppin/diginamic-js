import { Injectable } from '@angular/core';
import { Todo, Todos } from './todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoListServiceService {

  todolist: Todos;

  

  constructor() {
    this.todolist = new Array();
    let todo = new Todo(1, "test");
    this.todolist.push(todo);
  }





  getAll() {
    return this.todolist;
  }

  get(id: number) {
    return Todo[id];
  }

  getNewId() {
    let id: number = this.todolist.length + 1;
    id = id + 1;
    return id;
  }

  add(todo: Todo) {
    const t = new Todo(this.getNewId(), todo.label);
    this.todolist.push(t);
  }

  edit(todo: Todo) {
  }

  delete(id: number) {
    delete Todo[id];
  }

  
}  


