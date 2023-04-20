import { Component } from '@angular/core';
import { TravelCitiesService } from 'src/app/services/travel-cities/travel-cities.service';
import { ITrip, TRIPS } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trips!:ITrip[];
  trip:ITrip = TRIPS[0];
  lastTrip!:ITrip;

  constructor(private tripService: TravelCitiesService){}

  ngOnInit(){
    this.getAllTrips();
    this.getLastTrip();
  }

  getAllTrips(){
    this.tripService.getTrips().subscribe((trips) => this.trips = trips)
  }
  getLastTrip(){
    this.tripService.getLastTrip().subscribe((trip) => this.lastTrip = trip);
  }
}
