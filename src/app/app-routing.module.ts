import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './users/create/create.component';
import { DeleteComponent } from './users/delete/delete.component';
import { EditComponent } from './users/edit/edit.component';
import { UpdateComponent } from './users/update/update.component';
import { ViewComponent } from './users/view/view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view', component: ViewComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'update', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
