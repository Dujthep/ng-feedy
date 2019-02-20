import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap';

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
  feed = {};


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  search() {
    const rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';
    this.http.get(`${rssToJsonServiceBaseUrl}${this.url}`).subscribe(
      r => {
        console.log(r);
        this.feed = r;
        this.successModal.show();
      },
      err => { this.errorModal.show(); }
    )
  }

  addRss() {
    const data = {
      name: this.name,
      feed: this.feed
    }
    this.outputRss.emit(data);
    this.url = '';
    this.name = '';
  }
}
