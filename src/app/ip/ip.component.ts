import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

import { IpService } from '../service/ip.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
 
})
export class IpComponent implements OnInit {
  httpdata;
  txtCityName;
  cityName = '';
  constructor(private ipservice:IpService) { 
    
   
  }

  ngOnInit() {
    
  }
  getTemp() {
    this.ipservice.getData(this.txtCityName).subscribe(data => this.httpdata = data);
    this.cityName = this.txtCityName;
    console.log(this.httpdata )
  }
  

}
