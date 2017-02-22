import { Component, OnInit, Input } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemId: number;
  item;

  constructor(private hackernewsApiService: HackernewsApiService) { }

  ngOnInit() {
    this.hackernewsApiService.fetchItem(this.itemId)
      .subscribe(
        data => this.item = data,
        error => console.log('Could not load item' + this.itemId)
       );
  }

}
