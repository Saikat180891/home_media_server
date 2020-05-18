import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch/watch.component';

import { SharedModule } from '../../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  {
    path: '',
    component: WatchComponent
  },
  {
    path: ':id',
    component: WatchComponent
  }
];

@NgModule({
  declarations: [WatchComponent, VideoPlayerComponent, WatchListComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class WatchModule {}
