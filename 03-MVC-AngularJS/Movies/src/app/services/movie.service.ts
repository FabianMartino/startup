import { Injectable } from '@angular/core';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //The id carry the new id for the new movies that's why doesn't decrease so that can avoid conflict
  id:number = 3;
  //Load two movies
  private movies:Movie[] = [      {id: 1,
    title: 'Inside Man',
    duration: 129,
    year:2006,
    cast:['Denzel Washington','Jodie Foster','Clive Owen']
    },
    {id: 2,
    title: 'John Wick',
    duration: 101,
    year: 2014,
    cast:['Keanu Reeves','Willem Dafoe','John Leguizamo'] 
    }
  ];
  

  constructor() {}

  /**
   * Gets all the movies
   */
  getMovies(){
    return this.movies;
  }

  /**
   * Get a specific movie based on the id
   * @param id 
   */
  getSerchMovie(id:number):Movie{
    let result:Movie;
    this.movies.forEach(movie => {
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
    return this.id
  }


  /**
   * Add a movie the the list
   * @param newMovie 
   */
  addMovie(newMovie:Movie){
    this.movies.push(newMovie);
    this.id++;
  }
}
