import { Injectable } from '@angular/core';
import { Todo, Todos } from './todo.model';
import { element } from 'protractor';

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
    let todo1: Todo;
    this.todolist.filter(element => {
      if (element.id === id){
        todo1 = element;
      }
    });
    return todo1;
  }

  getNewId() {
    let id: number = this.todolist.length + 1;
    id = id + 1;
    return id;
  }

  add(todo: Todo) {
    todo.id = this.getNewId();
    this.todolist.push(todo);
  }

  edit(todo: Todo) {
    this.get(todo.id).label = todo.label;
  }

  delete(id: number) {
    for ( let i = 0; i < this.todolist.length; i++){
      if (this.todolist[i].id == id){
        this.todolist.splice(i);
      }
    }
  }
}

