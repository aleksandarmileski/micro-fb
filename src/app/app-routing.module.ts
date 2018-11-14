import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoComponent } from './components/photo/photo.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';

const routes: Routes = [
  { path: 'photos/:id', component: PhotoComponent },
  { path: 'add-photo', component: AddPhotoComponent },
  { path: 'photos', component: PhotosComponent },
  { path: '', redirectTo: '/photos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
