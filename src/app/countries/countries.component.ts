import { Component,OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public countriesData:any=[];
  constructor(public serviceObj:CountriesService){}

  ngOnInit(){
    this.serviceObj.getCountriesData().subscribe(

        (posRes) =>{
          this.countriesData=posRes;
          console.log(posRes);
        },
        (errRes:HttpErrorResponse)=>{
          console.log(errRes);
        }



    )
  }
}
