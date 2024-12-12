import { Component, inject} from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { Post } from '../../interfaces/post';
import { PostService } from '../../services/posts/posts.service';


@Component({
  selector: 'app-detail-posts',
  standalone: true,
  imports: [],
  templateUrl: './detail-posts.component.html',
  styleUrl: './detail-posts.component.css'
})
export class DetailPostsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  public postsService = inject(PostService);
  public post :Post | null = null;

  constructor(){
    this.postsService.getPost(this.route.snapshot.params['id']).then((post :Post) => {
      this.post = post;
    })
  }
}
