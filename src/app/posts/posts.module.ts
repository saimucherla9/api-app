import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatepostComponent } from './createpost/createpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';
import { DeletepostComponent } from './deletepost/deletepost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreatepostComponent,
    EditpostComponent,
    UpdatepostComponent,
    DeletepostComponent,
    ViewpostComponent
  ],
  imports: [
    CommonModule, RouterModule
  ]
})
export class PostsModule { }
