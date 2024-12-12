import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { DetailPostsComponent } from './components/detail-posts/detail-posts.component';
import { DetailTodosComponent } from './components/detail-todos/detail-todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title = 'Agence';

  public getTitle = () => {
    return this.title;
  }

}

