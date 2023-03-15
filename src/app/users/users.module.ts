import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    UpdateComponent,
    DeleteComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class UsersModule { }
