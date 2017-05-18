import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchDevsComponent } from './search-devs/search-devs.component';
import {SearchGithubDevsService} from './search-github-devs.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchDevsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchGithubDevsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
