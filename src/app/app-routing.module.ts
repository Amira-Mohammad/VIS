import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VideoListComponent} from '../components/video-list/video-list.component';
import {VideoDetailComponent} from '../components/video-detail/video-detail.component'
const routes: Routes = [
  {
    path:"",
    component: VideoListComponent
  },
  {
    path:"videos",
    component: VideoListComponent
  },
  {
    path:"videos/:link",
    component: VideoDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
