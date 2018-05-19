import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { MovieService } from './services/movie.service';

const appRoutes: Routes = [
  { path: 'movies', component: MoviesListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
