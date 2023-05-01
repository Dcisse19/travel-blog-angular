import { Component, Input } from '@angular/core';
import { TravelCitiesService } from 'src/app/services/travel-cities/travel-cities.service';
import { ITrip, TRIPS } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.scss']
})
export class LastPostComponent {
@Input() trip!:ITrip;

constructor(private tripService : TravelCitiesService){}
ngOnInit(){
}
}
