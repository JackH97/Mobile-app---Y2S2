import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }
// Link from api website to show information from that api search which for me was rugby
  getMovies(): Observable<any> {
    return this.http.get('http://www.omdbapi.com/?apikey=121c2657&s=rugby');
  }

}
