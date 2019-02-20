import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() listRss = [];
  @Output() choosedFeed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  chooseFeed(feed) {
    this.choosedFeed.emit(feed);
  }

}
