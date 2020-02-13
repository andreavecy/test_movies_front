import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: MoviesService) {}
  movies: object;
  search: string;
  startDate: string;
  finishDate: string;
  ngOnInit() {
    this.getmovies();
    }

    getmovies() {
      this.http.getMovies()
      .subscribe(data => {
         this.movies = data;
        });
    }

    search_movie() {
      this.http.filter(this.search)
      .subscribe(data => {
         this.movies = data;
        });
    }

    search_movie_by_date() {
      this.http.dateRange(this.startDate, this.finishDate)
      .subscribe(data => {
         this.movies = data;
        });
    }

}
