import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  listRss = [];
  rss$: Observable<[]>;
  feed$: Observable<[]>;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.rss$ = this.appService.asObserveRss;
    this.feed$ = this.appService.asObserveFeed;
  }

  getRss(data) {
    this.listRss.push(data);
    this.appService.updateRss(this.listRss);
  }

  choosedFeed(data) {
    console.log(data);
    this.appService.updateFeed(data.feed);
  }
}
