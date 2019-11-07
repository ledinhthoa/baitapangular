import { Injectable } from '@angular/core';
import { fakeMovies } from "../fake-movie";
import {Movie  } from "../models/movie";
import { MessageService } from "./message.service";
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMovie():Observable<Movie[]>{
    //  this.messaggeservice.add(`${new Date().toLocaleString()}.get movie list`)
    
    return of(fakeMovies);
  }
  getMovieFromId(id: number): Observable<Movie> {    
    return of(fakeMovies.find(movie => movie.id === id));
  }
  constructor(public  messaggeservice:MessageService, private http: HttpClient) { }
}
