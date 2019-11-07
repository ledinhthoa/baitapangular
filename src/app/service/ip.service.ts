import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private http:HttpClient) { }
  getData(cityName: String) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=e8e476fcc72261c465b2e812f901706c&units=metric&q=' + cityName;
    return this.http.get(url);
  }
}
