import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { EditComponent } from './album/edit/edit.component';

const routes: Routes = [
  {path: 'edit-album/id',component:EditComponent},
  {path:'album/id',component:AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
