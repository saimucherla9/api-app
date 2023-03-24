import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService implements OnInit {
  POSTS_URL: any = "https://jsonplaceholder.typicode.com/posts"
  constructor(private httpClient:HttpClient) {}


  ngOnInit(): void {
  }

 getPostsData():Observable<any>{
    debugger
    setTimeout(function(){},10000);
    return this.httpClient.get(this.POSTS_URL);
  }



  getPostData(postId: any):Observable<any>{
    return this.httpClient.get(this.POSTS_URL  + "/" + postId);
  }

  deletePostsData(postId: any) {
    this.httpClient.delete(this.POSTS_URL + "/" + postId);
  }
}
