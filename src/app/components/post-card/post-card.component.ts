import { Component, Input } from '@angular/core';
import { ITrip } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
@Input() trip!:ITrip;
tripImageUrl!: 'url(assets/images/cities/albanie-tirana/main-picture-tirana.svg)';

ngOnInit(){
  // this.tripImageUrl = `url(${this.trip.mainImage.image})`;
}
}
