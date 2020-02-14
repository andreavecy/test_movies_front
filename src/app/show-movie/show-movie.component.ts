import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})
export class ShowMovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: MoviesService) { }
  movieId: string;
  movie: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('movieId');
    });
    this.http.getMovie(this.movieId)
    .subscribe(data => {
      this.movie = data;
     });
  }

}
