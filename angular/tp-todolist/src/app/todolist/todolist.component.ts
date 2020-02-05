import { Component, OnInit, Output } from '@angular/core';
import { Todo, Todos } from '../todo.model';
import { TodoListServiceService } from '../todo-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'td-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: Todos;

  constructor(private todolistservice: TodoListServiceService, private route: Router) {

   }

  ngOnInit() {
    this.todolist = this.todolistservice.getAll();
  }

  editTodo(id: number){
    this.route.navigate(['/edit/' + id]);
  }

  deleteTodo(id: number){
    this.todolistservice.delete(id);
  }
}
