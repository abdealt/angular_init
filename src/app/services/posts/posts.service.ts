import { Injectable } from '@angular/core';
import { Post } from '../../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // public listPosts : Post[] = [];

  constructor() {
    // this.listPosts = [
    //   { id:1, title: 'POST 1'},
    //   { id:2, title: 'POST 2'},
    //   { id:2, title: 'POST 2'}
    // ];
  }

  public getPosts = async() : Promise<Post[]> =>{
    // return await this.listPosts;
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return (await res.json()) ?? [];
  }

  public getPost = async(id: string) : Promise<Post> =>{
    // return await this.listPosts;
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
    return (await res.json()) ?? null;
  }


  public updatePost = async (id: number, updatedPost: Post): Promise<Post | null> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost),
    });

    return (await res.json()) ?? null;
  }
}
