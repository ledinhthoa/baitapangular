import { Component, OnInit,Input } from '@angular/core';
import {Movie } from "../models/movie";
import { ActivatedRoute} from '@angular/router';
import {Location } from '@angular/common';
import { MoviesService } from "../service/movies.service";
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie:Movie;

  constructor(
    //3 cai la inzetable co nghia la truy xuat bat ki noi dau,mang tinh toan cuc co the truy xuat ra
    private route:ActivatedRoute,
    private location:Location,
    private moviesservice:MoviesService,

  ) { }

  ngOnInit() {
    this.getMovieformRoute();
  }
  getMovieformRoute():void{
    const id=+this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap=${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.moviesservice.getMovieFromId(id).subscribe(movie => this.movie = movie); 
  }
  goBack():void{
    this.location.back();
  }

}
