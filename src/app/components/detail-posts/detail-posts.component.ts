import { Component, inject} from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Post } from '../../interfaces/post';
import { PostService } from '../../services/posts/posts.service';


@Component({
  selector: 'app-detail-posts',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './detail-posts.component.html',
  styleUrl: './detail-posts.component.css'
})
export class DetailPostsComponent {
  route : ActivatedRoute = inject(ActivatedRoute);
  public postsService = inject(PostService);
  public post :Post | null = null;
  public editMode: boolean = false;


  constructor(){
    this.postsService.getPost(this.route.snapshot.params['id']).then((post :Post) => {
      this.post = post;
    })
  }
  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  updatePost() {
    if (this.post) {
      this.postsService.updatePost(this.post.id!, this.post).then(() => {
        this.editMode = false;
        alert('Post updated successfully!');
      });
    }
  }

}
