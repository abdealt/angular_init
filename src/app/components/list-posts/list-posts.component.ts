import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Post } from '../../interfaces/post';
import { PostService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {
  public listPosts : Post[] = [];
  public postsService = inject(PostService);

  constructor(){
    this.postsService.getPosts().then((posts : Post[]) =>{
      this.listPosts = posts;
    });
  }
}
