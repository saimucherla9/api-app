import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatepostComponent } from './posts/createpost/createpost.component';
import { DeletepostComponent } from './posts/deletepost/deletepost.component';
import { EditpostComponent } from './posts/editpost/editpost.component';
import { ViewpostComponent } from './posts/viewpost/viewpost.component';

import { UpdateComponent } from './users/update/update.component';
import { ViewComponent } from './users/view/view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view', component: ViewComponent },
  { path: 'editpost/:postId', component: EditpostComponent },
  { path: 'createpost', component: CreatepostComponent },
  { path: 'viewpost', component: ViewpostComponent },
  { path: 'deletepost/:postId', component: DeletepostComponent },
  { path: 'update/:postId', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
