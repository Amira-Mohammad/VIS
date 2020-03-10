import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnDestroy {
   private routeSub :any;
   link : string
  constructor( private route : ActivatedRoute ) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params =>{
      this.link = params["link"]
    })
      
  }
  ngOnDestroy(){
     this.routeSub.unsubscribe()
  }

  

}
