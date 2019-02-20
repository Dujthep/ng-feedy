import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {

  private rssSource = new BehaviorSubject<[]>([]);
  asObserveRss = this.rssSource.asObservable();

  private feedSource = new BehaviorSubject<{}>({});
  asObserveFeed = this.feedSource.asObservable();

  constructor() { }

  updateRss(list) {
    this.rssSource.next(Object.assign([], list));
  }

  updateFeed(feed) {
    this.feedSource.next(Object.assign({},feed));
  }
}
