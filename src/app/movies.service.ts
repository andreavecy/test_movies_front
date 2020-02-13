import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = 'http://localhost:3030/';
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.url + 'movies');
  }

  filter(query: string) {
    return this.http.get(this.url + 'movies?query=' + query) ;
  }
  dateRange(startDate: string, finishDate: string) {
    return this.http.get(this.url + 'date_range?start=' + startDate + '&finish=' + finishDate );
  }
}
