import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchGithubDevsService {

  private searchDevsEndPoint = "https://api.github.com/search/users?q=";
  private getDevDetailsEndPoint = "https://api.github.com/users/";
  constructor(private http: Http) { }

  //getDistinctLanguages(){
  //  let url
  //}

  getDevsByPlaceAndLanguage(place: string, language: string) {
    let url;
    if (place && !language) {
      url = `${this.searchDevsEndPoint}location:${place}`;
    } else if (!place && language) {
      url = `${this.searchDevsEndPoint}language:${language}`;
    } else {
      url = `${this.searchDevsEndPoint}location:${place}+language:${language}`;
    }

    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDevDetailsByUserName(username: string) {
   if (username) {
     let url = `${this.getDevDetailsEndPoint}${username}`;
     return this.http.get(url)
       .map((res: Response) => res.json())
       .catch(this.handleError);
   }
 }

 private extractData(res: Response) {
      return res.json().items || {};
 }

 private handleError(error: Response | any) {
   let errMsg: string;
   if (error instanceof Response) {
     const body = error.json() || '';
     const err = body.error || JSON.stringify(body);
     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
   } else {
     errMsg = error.message ? error.message : error.toString();
   }
   //console.error(errMsg);
   return Observable.throw(errMsg);
 }

}
