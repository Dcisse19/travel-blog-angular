import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEnvironment } from 'src/environments/environment';

export interface WeatherInfo {
  address: string,
  days:[{
    dateTime: string,
    tempmax: number,
    tempmin: number,
    temp: number,
    hours:[{
      dateTime:Date,
      tempmax: number,
      tempmin: number,
      temp: number,
    }]
  }]
}
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly url = apiEnvironment.url;
  private readonly key = apiEnvironment.key;
  private readonly type = apiEnvironment.contentType;
  private date!:Date;
  constructor(private http: HttpClient) { }

  getCurrentDate(){
    const date = new Date();
    const formatedDate = date.toISOString().substring(0,10);
    return formatedDate;
  }

  getCurrentHour(){
    const date = new Date();
    const formatedHour = date.getHours();
    return formatedHour;
  }

  getWeather(city: string): Observable <WeatherInfo>{
    return this.http.get<WeatherInfo>(`${this.url}/${city}?unitGroup=metric&include=hours&key=${this.key}&contentType=${this.type}`);
    // https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tirana?unitGroup=metric&include=hours&key=BFMAN2GSKLRC88MLY8JHDVV4D&contentType=json
  }
}
