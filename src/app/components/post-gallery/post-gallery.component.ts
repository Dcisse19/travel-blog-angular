import { Component, Input } from '@angular/core';
import { ITrip } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-post-gallery',
  templateUrl: './post-gallery.component.html',
  styleUrls: ['./post-gallery.component.scss']
})
export class PostGalleryComponent {
@Input() trips!:ITrip[];
}
