import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  title:string;
  year:number;
  duration:number;
  cast:string;

  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit() {
  }
  /**
   * Check to see if the new data is not empty and submit the new movie
   */
  onSubmit(){
    let messageResult = document.getElementById("result");
    if(this.cast && this.duration && this.title && this.year){
      let newMovie:Movie = {id: this.movieService.getNewId(),
        title: this.title,
        year: this.year,
        duration: this.duration,
        cast: this.cast.split(",")
        }
      this.movieService.addMovie(newMovie);
      messageResult.classList.add("success")
      messageResult.innerHTML = "your movie was added correcly"
    }
    else{
      messageResult.classList.add("error")
      messageResult.innerHTML = "Error in one or more fields of the new movie"
    }
  }
}
