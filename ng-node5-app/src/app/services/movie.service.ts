import { Injectable } from '@angular/core';

import { Movie } from './movie'
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { from } from 'rxjs/observable/from';


@Injectable()
export class MovieService {

  MOVIES: Movie[] = [
    Movie.of('Aventure', ['ironman', 'captain america']),
    Movie.of('Super Man', ['super man', 'luke'])
  ];

  constructor() { }

  getMovies(): Observable<Movie> {
    return from(this.MOVIES);
  }
  
}
