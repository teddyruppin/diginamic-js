import { Component, OnInit } from '@angular/core';
import { TodoListServiceService } from '../todo-list-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo, Todos } from '../todo.model';

@Component({
  selector: 'td-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit {

  todo: Todo;

  constructor(private todolistserv: TodoListServiceService, private router: Router, private actrout: ActivatedRoute) { 
    
  }

  ngOnInit() {
    if (this.actrout.snapshot.paramMap.get('id') == null) {
        this.todo = new Todo(0, '');
    } else {
      console.log('edit pas fait');
        //this.todolistserv.get(id) =
    }
  }

  addTodo(id: number) {
    if (id === 0) {
      this.todolistserv.add(this.todo);
    } else {
      this.todolistserv.edit(this.todo);
    }
  }

}
