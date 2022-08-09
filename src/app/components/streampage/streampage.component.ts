import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streampage',
  templateUrl: './streampage.component.html',
  styleUrls: ['./streampage.component.css']
})
export class StreampageComponent implements OnInit {
  
  public youtubeUrl = 'https://www.youtube.com/watch?v=2dZT9GShJ3A&t=190s';

  public youtubeId = 'vvRo5tOU32Q';

  public embedUrl = 'https://www.youtube.com/embed/'

  videoUrl: string;

  comment = "";
  postcomment :string[]= [];

  send(comment: string){
    this.postcomment.push(comment);
    comment="";
  }



  constructor() {     
        this.videoUrl =  this.embedUrl + this.youtubeId;

  }

  ngOnInit(): void {
  }

}
