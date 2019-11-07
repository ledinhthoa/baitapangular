import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";



import { AppComponent } from './app.component';
import { HocSinhComponent } from './component/hocsinh/hocsinh.component';
import { BookComponent } from './book/book.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormComponent } from './form/form.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { IpComponent } from './ip/ip.component';
import { IpService  } from "./service/ip.service";
import { MoviesService  } from "./service/movies.service";
import { MessageService } from "./service/message.service";

import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FormTodoComponent } from './form-todo/form-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HocSinhComponent,
    BookComponent,
    CalculatorComponent,
    FormComponent,
    ChildComponent,
    ParentComponent,
    IpComponent,
    MovieComponent,
    MovieDetailComponent,
    MessagesComponent,
    DashboardComponent,
   
    
   
   
    //FormTodoComponent,

  ],
  imports: [
    BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule, AppRoutingModule,
   
  ],
  providers: [IpService,MoviesService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
