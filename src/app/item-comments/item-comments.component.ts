import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  item;

  constructor(
    private hackernewsApiService: HackernewsApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const itemId = +params['id'];
      this.hackernewsApiService.fetchComments(itemId).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item' + itemId));
    });
  }
}
