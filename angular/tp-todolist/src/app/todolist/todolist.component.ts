import { Component, OnInit, Output } from '@angular/core';
import { Todo, Todos } from '../todo.model';
import { TodoListServiceService } from '../todo-list-service.service';

@Component({
  selector: 'td-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: Todos;

  constructor(private todolistservice: TodoListServiceService) {

   }

  ngOnInit() {
    this.todolist = this.todolistservice.getAll();
  }

}
