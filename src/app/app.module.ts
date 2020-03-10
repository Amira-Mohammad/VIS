import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VideoListComponent} from '../components/video-list/video-list.component';
import {VideoDetailComponent} from '../components/video-detail/video-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
