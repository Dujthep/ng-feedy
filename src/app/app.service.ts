import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Feed } from './models/feed';

@Injectable()
export class AppService {

  private rssSource = new BehaviorSubject<Feed[]>([]);
  asObserveRss = this.rssSource.asObservable();

  private feedSource = new BehaviorSubject<Feed>(null);
  asObserveFeed = this.feedSource.asObservable();

  constructor() { }

  updateRss(list: Feed[]) {
    this.rssSource.next(Object.assign([], list));
  }

  updateFeed(feed) {
    this.feedSource.next(Object.assign({}, feed));
  }
}
