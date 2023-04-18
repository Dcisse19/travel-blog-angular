import { Component } from '@angular/core';
import { ITrip } from 'src/mocks/cities.mock';
import { TravelCitiesService } from './services/travel-cities/travel-cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-blog';
  trips!:ITrip[];

  constructor(private tripService: TravelCitiesService){}

  ngOnInit(){
    this.tripService.getTrips().subscribe((trips) => this.trips = trips)
  }
}
