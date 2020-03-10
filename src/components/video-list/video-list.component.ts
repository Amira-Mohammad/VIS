import { Component, OnInit, OnDestroy } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
  // videoList = ["video1" , "video2" , "video3"]
  title = 'videoList';
  date;
  videoList = [
    {
      name:"video1",
      link:"link1",
      embed:`nzyJ9imm29w`
    },
    {
      name:"video2",
      link:"link2",
      embed:`nzyJ9imm29w`
    },
    
    {
      name:"video3",
      link:"link3",
      embed:`nzyJ9imm29w`
    }
  ]
  constructor(private sanitizer : DomSanitizer) {}
  ngOnInit() {
    this.date = new Date()
  }
  getEmbedURL(video){
    return this.sanitizer.bypassSecurityTrustResourceUrl ('https://www.youtube.com/embed/+video.embed')
  }

  ngOnDestroy(){
  }

}


