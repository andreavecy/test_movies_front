import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';


const routes: Routes = [
  {
    path: 'movies', component: MoviesComponent
  },
  {
    path: 'create', component: CreateMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
