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

  public temp_list_posts : Post[] =[];


  public filter_list_posts = (filter_value:string) => {
    this.temp_list_posts = this.listPosts.filter(l => l.title.includes(filter_value))
  }

  constructor(){
    this.postsService.getPosts().then((posts : Post[]) =>{
      this.listPosts = posts;
      this.temp_list_posts = posts;
    });
  }

  public deletePost(post: Post): void {
    this.listPosts = this.listPosts.filter(p => p.id !== post.id); // a la liste des post on filter le post.id qui est passé en argument
    this.temp_list_posts = [...this.listPosts]; // Force la mise à jour
  }
}
