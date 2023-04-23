import { Component, Input } from '@angular/core';
import { ITrip } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-trip-review',
  templateUrl: './trip-review.component.html',
  styleUrls: ['./trip-review.component.scss']
})
export class TripReviewComponent {
@Input() post!:ITrip;
}
