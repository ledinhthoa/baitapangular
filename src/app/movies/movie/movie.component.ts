import { Component, OnInit } from '@angular/core';
import {Movie } from "../../models/movie";
// import {fakeMovies } from "../../fake-movie";
import { MoviesService } from "../../service/movies.service";


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
//  movies=fakeMovies;
movies:Movie[];
  constructor( private movieService:MoviesService) { }

  ngOnInit() {
    this.getmovieforservice();
  }
  // selecrMovie:Movie;
  // onselect(movie:Movie): void{
  //   this.selecrMovie=movie;
  //   console.log(`selecrMovie=${JSON.stringify(this.selecrMovie)}`);
   
  // }
getmovieforservice():void{
  // this.movies=this.movieService.getMovie();
this.movieService.getMovie().subscribe(updateMovies=>this.movies=updateMovies);

}
}
