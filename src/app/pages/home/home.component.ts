import { Component } from '@angular/core';
import { TravelCitiesService } from 'src/app/services/travel-cities/travel-cities.service';
import { ITrip } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trips!:ITrip[];

  constructor(private tripService: TravelCitiesService){}

  ngOnInit(){
    this.tripService.getTrips().subscribe((trips) => this.trips = trips)
  }
}
