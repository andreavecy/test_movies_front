import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  title: string;
  movieOverview: string;
  posterPath: string;
  releaseDate: string;

  constructor(private http: MoviesService, private router: Router) { }

  ngOnInit(): void {
  }

  createMovie() {
    this.http.createMovie(this.title, this.posterPath, this.releaseDate, this.movieOverview )
    .subscribe(
      (data) => {
        this.router.navigate(['movies']);
     },
     (error) => {

     }
     );
  }

}
