import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { FeedSearchComponent } from './feed-search/feed-search.component';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    FeedListComponent,
    FeedSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
