import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../interfaces/todo';
import { TodosService } from '../../services/todos/todos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {
  public listTodos : Todo[] = [];
  public todosService = inject(TodosService);

  constructor(){
    this.todosService.getTodos().then((todos : Todo[]) =>{
      this.listTodos = todos;
    });
  }
}



