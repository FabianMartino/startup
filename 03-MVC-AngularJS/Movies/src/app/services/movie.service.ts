import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //Next id use in a new movie
  private nextId:number;
  
/**
 * Get the movies and find the next valid id for use
 */
  constructor() {
    let movies = this.getMovies();    
    if(movies.length === 0){
      this.nextId = 0;
    }
    else{
      let maxId = movies[movies.length-1].id;
      this.nextId = maxId+1;
    }
  }

  /**
   * Gets all the movies
   */
  getMovies(){
    let localStorageItem = JSON.parse(localStorage.getItem("movies"))
    return localStorageItem === null ? []: localStorageItem.movies;
  }

  /**
   * Get a specific movie based on the id
   * @param id 
   */
  getSerchMovie(id:number):Movie{
    let localMovies:Movie[] = this.getMovies();
    let result:Movie;
    localMovies.forEach(movie => {
      if (movie.id == id) {
        result = movie;
      }
    });
    return result;
  }

  /**
   * Return the id variable
   */
  getNewId():number{
    return this.nextId;
  }


  /**
   * Add a movie the the list
   * @param newMovie 
   */
  addMovie(newMovie:Movie){
    let localMovies:Movie[] = this.getMovies();
    localMovies.push(newMovie);    
    this.setLocalStorageMovies(localMovies);
    this.nextId++;
  }

  /**
   * Save movies id the local storage
   * @param movies 
   */
  private setLocalStorageMovies(movies: Movie[]):void{
    localStorage.setItem("movies",JSON.stringify({"movies": movies}))
  }

  /**
   * Remove the movie with a specific id
   * @param id 
   */
  public removeMovie(id:number):void{
    let localMovies = this.getMovies();
    for( var i = 0; i < localMovies.length; i++){ 
      if ( localMovies[i].id === id) {
        localMovies.splice(i, 1); 
        i--;
      }
    }
    this.setLocalStorageMovies(localMovies);    
  }

  /**
   * save the changes from a edited movie
   */
  public editMovie(movie:Movie):void{
    let localMovies = this.getMovies();
    for( var i = 0; i < localMovies.length; i++){ 
      if ( localMovies[i].id === movie.id) {
        localMovies.splice(i, 1); 
        i--;
      }
    }
    localMovies.push(movie);
    this.setLocalStorageMovies(localMovies);
  }

}
