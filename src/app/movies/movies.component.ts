import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: object;
  search: string;
  startDate: string;
  finishDate: string;
  isShow = true;
  constructor(private http: MoviesService) { }

  ngOnInit(): void {
    this.getmovies();
  }
  toggleDisplay() {
    this.isShow = !this.isShow;
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
