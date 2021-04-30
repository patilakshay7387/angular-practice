import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private youtubeAPI: HttpClient) {}

  getYouTubeSearch() {
    const request = `${environment.URL}/search?part=snippet&maxResults=25&q=random&key=${environment.KEY}`;

    return this.youtubeAPI.get(request);
  }
}
