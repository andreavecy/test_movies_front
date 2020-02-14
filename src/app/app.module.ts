import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    MoviesComponent,
    ShowMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
