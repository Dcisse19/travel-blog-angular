import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelCitiesService } from 'src/app/services/travel-cities/travel-cities.service';
import { ITrip } from 'src/mocks/cities.mock';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  trip!: ITrip;

  constructor(
    private route: ActivatedRoute,
    private tripService: TravelCitiesService
  ){}
  ngOnInit(): void {
    this.getTripById();
  }
  getTripById(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.tripService.getTripById(id).subscribe((trip) => {
      this.trip = trip;
      console.log(this.trip);
    })
  }

}
