import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  postId: any;
  singlePostData:any;

  constructor(private activatedRouter: ActivatedRoute, private postService:PostServiceService){

  }


  ngOnInit(): void {
    this.postId = this.activatedRouter.snapshot.params["postId"];
    this.getPost(this.postId);
  }

  getPost(postId: any) {
    this.postService.getPostData(this.postId).subscribe({next:data=>{this.singlePostData=data; console.log(data)}} );
  }

}
