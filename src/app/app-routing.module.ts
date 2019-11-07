import { NgModule } from '@angular/core';

// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from "./movies/movie/movie.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {  MovieDetailComponent} from "./movie-detail/movie-detail.component";
import { Movie } from "./models/movie";
const routes: Routes = [
  { path: '',redirectTo:'/dashboard',pathMatch:'full' },
  { path: 'movies', component: MovieComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'detail/:id', component:MovieDetailComponent },
  
 
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
