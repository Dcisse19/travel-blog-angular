import { Component, Input } from '@angular/core';
import { ITrip } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-trip-gallery',
  templateUrl: './trip-gallery.component.html',
  styleUrls: ['./trip-gallery.component.scss']
})
export class TripGalleryComponent {
@Input() post!:ITrip;
}
