import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  postsData: any;

  constructor(private postService:PostServiceService){}
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPostsData().subscribe({next:data=>{this.postsData=data; console.log(data)}} );
  }

}
