import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/youtube.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  videoData;
  constructor(private youtubeAPI: YoutubeService) {}

  ngOnInit(): void {
    this.youtubeAPI.getYouTubeSearch().subscribe((data:  any) => {
      console.log(data);
      this.videoData = data.items
    });;
  }
}
