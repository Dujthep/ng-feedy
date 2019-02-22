import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { Feed } from './models/feed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  listRss = [];
  rss$: Observable<Feed[]>;
  feed$: Observable<Feed>;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.rss$ = this.appService.asObserveRss;
    this.feed$ = this.appService.asObserveFeed;
  }

  getRss(data: Feed) {
    this.listRss.push(data);
    this.appService.updateRss(this.listRss);
  }

  choosedFeed(data) {
    this.appService.updateFeed(data);
  }
}
