import { Component, OnInit } from '@angular/core';
import {SearchGithubDevsService} from '../search-github-devs.service';

@Component({
  selector: 'app-search-devs',
  templateUrl: './search-devs.component.html',
  styleUrls: ['./search-devs.component.css']
})
export class SearchDevsComponent implements OnInit {
  place: string;
  language: string;
  results: any[] = [];
  selected: boolean = false;// Flag to check if a user has clicked.
  selectedUser: any;
  error_msg: string = "";

  constructor(private searchGithubDevsService: SearchGithubDevsService) { }

  ngOnInit() {
  }

  onSearch(place: string, language: string) {
    this.selected = false;
    this.error_msg = "";
    if (place || language) {
      this.place = place;
      this.language = language;

      this.searchGithubDevsService.getDevsByPlaceAndLanguage(this.place, this.language)
        .subscribe(devs => { this.results = devs },
        error => {
          this.results = [];
          this.error_msg = "No Users found. Please,try again!";
          console.error(error);
        });

    }

  }

  getDetails(username: string) {
    this.searchGithubDevsService.getDevDetailsByUserName(username).subscribe(
      userDetails => {
        this.selectedUser = userDetails;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
  }
}
