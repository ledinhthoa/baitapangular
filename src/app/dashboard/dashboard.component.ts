import { Component, OnInit } from '@angular/core';
import { Movie } from "../models/movie";
import { MoviesService } from "../service/movies.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
movies:Movie[]=[];
  constructor( private movieservice:MoviesService) { }

  ngOnInit() {
    this.getMovies();
    console.log(this.movies)
  }

getMovies():void{
  
  this.movieservice.getMovie().subscribe(movies => this.movies = movies.slice(0));
 
}
}
