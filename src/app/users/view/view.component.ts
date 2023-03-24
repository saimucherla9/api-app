import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  usersData: any;

  constructor(private userservice:UserServiceService){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userservice.getUsersData().subscribe({next:data=>{

      this.usersData=data;

      console.log(data)}

      });
  }
}
