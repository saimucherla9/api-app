import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostServiceService } from '../post-service.service';


@Component({
  selector: 'app-deletepost',
  templateUrl: './deletepost.component.html',
  styleUrls: ['./deletepost.component.css'],
})
export class DeletepostComponent implements OnInit {
  postId: any;

  constructor(
    private activeRouter: ActivatedRoute,
    private postServiceService: PostServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var decision  = confirm("Are you really want to delete?");
    if (decision){
      this.postId = this.activeRouter.snapshot.params['postId'];
      this.deletePost();
    }
  }

  deletePost() {
    this.postServiceService.deletePostsData(this.postId);
    console.log("Reached in the delete Post method in component")
    this.router.navigateByUrl("/viewpost");
  }

  //create method in componen
  //inject service here
  //create method in post service
  //create new method delete
  //using http delete
}
