import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

    //HttpClient http=new HttpClient();
  constructor(private http:HttpClient) { }

  public getCountriesData():Observable<any>{

    return this.http.get("https://restcountries.com/v3.1/all");

  }
}
