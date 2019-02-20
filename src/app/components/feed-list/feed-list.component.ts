import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {

  @Input() feed = {};

  constructor() { }

  ngOnInit() {
  }

}
