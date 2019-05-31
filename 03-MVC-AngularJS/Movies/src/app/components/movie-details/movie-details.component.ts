import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/Movie'
import { MovieService } from '../../services/movie.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:Movie;
  constructor(private route:ActivatedRoute, private movieService:MovieService) { }

  /**
   * Brings the id from the chosen movie and with that can get all the data from the movie
   */
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getSerchMovie(id);
  }

}
