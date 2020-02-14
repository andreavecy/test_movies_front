import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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
  createMovie(title: string, posterPath: string, releaseDate: string, movieOverview: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post( this.url + '/movies', { 'movie': {
    'title': title,
    'porter_path': posterPath,
    'release_date': releaseDate,
    'movie_overview': movieOverview }}
    , httpOptions );
  }

  getMovie(id: string) {
    return this.http.get(this.url + 'movies/' + id );
  }
}
