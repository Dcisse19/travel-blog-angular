import { Component } from '@angular/core';
import { TravelCitiesService } from 'src/app/services/travel-cities/travel-cities.service';
import { ITrip, TRIPS } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.scss']
})
export class LastPostComponent {
trip:ITrip = TRIPS[0];

constructor(private tripService : TravelCitiesService){}
ngOnInit(){
  // this.getLastTrip();
  console.log('this trip :',this.trip);
}

getLastTrip(){
  this.tripService.getLastTrip().subscribe((trip) => {
    this.trip = trip;
    console.log(this.trip);
  });
}
}
