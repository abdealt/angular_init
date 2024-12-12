import { Injectable } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { NgIf } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  // public listTodos : Todo[] = [];

  constructor() {
    // this.listTodos = [
    //   { id:1, title: 'TODO 1'},
    //   { title: 'TODO 2'},
    // ];
  }

  public getTodos = async() : Promise<Todo[]> =>{
    // return await this.listTodos;
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return (await res.json()) ?? [];
  }

  public getTodo = async(id: string) : Promise<Todo> =>{
    // return await this.listTodos;
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
    return (await res.json()) ?? [];
  }

}
