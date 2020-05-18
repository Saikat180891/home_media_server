import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./pages/file-uploader/file-uploader.module').then(
        m => m.FileUploaderModule
      )
  },
  {
    path: 'playlist',
    loadChildren: () =>
      import('./pages/playlist/playlist.module').then(m => m.PlaylistModule)
  },
  {
    path: 'watch',
    loadChildren: () =>
      import('./pages/watch/watch.module').then(m => m.WatchModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
