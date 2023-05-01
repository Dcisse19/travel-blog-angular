import { Component } from '@angular/core';
import { TravelCitiesService } from 'src/app/services/travel-cities/travel-cities.service';
import { WeatherInfo, WeatherService } from 'src/app/services/weather/weather.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private weatherService: WeatherService,
  private tripService: TravelCitiesService) {}
  date! :string;
  hour! : number;
  city!: string;

  weather!: WeatherInfo;
  ngOnInit() {
    this.getLastCity();
  }

  getLastCity(){
    this.tripService.getLastTrip().subscribe((trip) => {
      this.city = trip.city;
      console.log(trip.city);
      this.getWeather(trip.city);
  });
  }
  setCurrentDate() {
    this.date = this.weatherService.getCurrentDate();
  }
  setCurrentHour() {
    this.hour = this.weatherService.getCurrentHour();
  }

  getWeather(city: string){
    this.setCurrentDate();
    this.setCurrentHour();
    this.weatherService.getWeather(city)
    .subscribe((weather) =>
    {
      this.weather = weather;
      console.log(this.weather);
    }
    );
    // .pipe(
    //    map((weather) => {
    //     return {
    //       ...weather,
    //       days: weather.days.filter((day) => {day.dateTime = this.date}),
    //     }
    //   })
    // )

  }
}
