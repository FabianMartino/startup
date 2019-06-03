import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { Movie } from '../../models/Movie';
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  movies:Movie[];
  constructor(private movieService:MovieService, private router:Router) { }
  /**
   * Brings the movies
   */
  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
  /**
   * It will take you to the details of the movie
   * @param movie 
   */
  onSelect(movie){
    this.router.navigate(['/movieDetail',movie.id])
  }

  /**
   * Delete this movie
   * @param movie 
   */
  onDelete(movie){
    this.movieService.removeMovie(movie.id);
    this.movies = this.movieService.getMovies();
  }
  /**
   * Send you to the edit movies form with the id of the movie to edit
   * @param movie 
   */
  onEditMovie(movie){
    this.router.navigate(['/editMovie',movie.id])
  }
}
