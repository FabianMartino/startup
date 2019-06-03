import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie:Movie;
  title:string;
  year:number;
  duration:number;
  cast:string;

  constructor(private route:ActivatedRoute, private movieService:MovieService,private router:Router) {}

  /**
   * It load the variables this way becose if is made only with movies is constanly edit regardless of the submit button
   */
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getSerchMovie(id);
    this.title = this.movie.title;
    this.year = this.movie.year;
    this.duration = this.movie.duration;
    this.cast = this.movie.cast.toString();
  }

  /**
   * Check that the new data is not empty
   */
  onSubmit(){
    let messageResult = document.getElementById("result");
    if(this.cast && this.duration && this.title && this.year){
      this.movie.title = this.title;
      this.movie.year = this.year;
      this.movie.duration = this.duration;
      this.movie.cast = this.cast.split(",");
      this.movieService.editMovie(this.movie);
      messageResult.classList.add("success")
      messageResult.innerHTML = "your movie was edited correcly"
    }
    else{
      messageResult.classList.add("error")
      messageResult.innerHTML = "Error in one or more fields of the movie"
    }
  }
}
