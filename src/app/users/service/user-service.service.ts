import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';


// import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit {

  constructor(private httpClient:HttpClient) { }
  USERS_URL: any = "https://jsonplaceholder.typicode.com/users"
  ngOnInit(): void {

  }

  getURL():any{


  }

  getUsersData():Observable<any>{
    return this.httpClient.get(this.USERS_URL);
  }
}
