import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class UsersModule { }
