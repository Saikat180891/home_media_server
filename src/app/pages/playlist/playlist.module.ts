import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistComponent } from './playlist/playlist.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {
    path: '',
    component: PlaylistComponent
  }
];

@NgModule({
  declarations: [PlaylistComponent, AlbumComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class PlaylistModule {}
