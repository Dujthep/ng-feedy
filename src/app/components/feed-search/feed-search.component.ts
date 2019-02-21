import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap';
import { Feed } from 'src/app/models/feed';

@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.component.html',
  styleUrls: ['./feed-search.component.scss']
})
export class FeedSearchComponent implements OnInit {

  @ViewChild('successModal') successModal: ModalDirective;
  @ViewChild('errorModal') errorModal: ModalDirective;
  @Output() outputRss = new EventEmitter();
  url: string = '';
  name: string = '';
  feed: Feed;


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  search() {
    const rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
    this.http.get(`${rssToJsonServiceBaseUrl}${this.url}`).subscribe(
      (r: Feed) => {
        this.feed = r;
        this.successModal.show();
      },
      err => { this.errorModal.show(); }
    )
  }

  addRss() {
    const data:Feed = this.feed;
    data.name = this.name;
    this.successModal.hide();
    this.outputRss.emit(data);
    this.url = '';
    this.name = '';
  }
}
