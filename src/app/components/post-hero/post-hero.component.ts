import { Component, Input } from '@angular/core';
import { ITrip } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-post-hero',
  templateUrl: './post-hero.component.html',
  styleUrls: ['./post-hero.component.scss']
})
export class PostHeroComponent {
@Input() post!:ITrip;
}
