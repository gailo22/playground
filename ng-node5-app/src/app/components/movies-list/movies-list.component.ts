import { Component, OnInit } from '@angular/core';
import * as R from 'ramda';

import { MovieService } from '../../services/movie.service';
import { Movie } from '../../services/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    const val = R.add(1,2);
    console.log(val);
    
    this.getMovies();
  }

  getMovies() {
    return this.movieService.getMovies()
      .subscribe(data => {
        console.log(data); 
        this.movies.push(data)
      });
  }

}
