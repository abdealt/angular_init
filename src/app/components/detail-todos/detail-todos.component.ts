import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../../services/todos/todos.service';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-detail-todos',
  standalone: true,
  imports: [],
  templateUrl: './detail-todos.component.html',
  styleUrl: './detail-todos.component.css'
})
export class DetailTodosComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  public todosService = inject(TodosService);
  public todo :Todo | null = null;

  constructor(){
    this.todosService.getTodo(this.route.snapshot.params['id']).then((todo : Todo) => {
      this.todo = todo;
    });
  }

}
