import { Component, OnInit } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items: number[];

  constructor(private hackernewsApiService: HackernewsApiService) {
    this.items = Array(30);
    console.log(this.items);
  }

  ngOnInit() {
    this.hackernewsApiService.fetchStories()
      .subscribe(
        items => this.items = items,
        error => console.log('Error fetching stories')
      );
  }

}
