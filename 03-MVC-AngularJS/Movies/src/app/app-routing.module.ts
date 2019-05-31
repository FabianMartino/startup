import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';

const routes: Routes = [
  {
    path:'', component: MovieComponent,
  },
  {
    path: 'movieDetail/:id', component: MovieDetailsComponent
  },
  {
    path: 'addMovie', component: AddMovieComponent
  },
  {
    path: 'editMovie/:id', component: EditMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
