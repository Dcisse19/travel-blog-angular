import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.mock';
import { ITrip, TRIPS } from 'src/mocks/cities.mock';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TravelCitiesService {
  private readonly tripUrl = environment.api;
  constructor(
    private readonly http:HttpClient
  ) { }

  getTrips():Observable<ITrip[]>{
    console.log("environnement : ",environment.envName);
    if(environment.envName === 'dev'){
      return of(TRIPS);
    }
    return this.http.get<ITrip[]>(`${this.tripUrl}/cities`);
  }

  getTripById(tripId:number):Observable<ITrip>{
    if(environment.envName === 'dev'){
      const foundTrip = TRIPS.filter((trip) => trip.id === tripId);
      const data: ITrip = foundTrip[0];
      return of(data);
    }
    return this.http.get<ITrip>(`${this.tripUrl}/cities/${tripId}`);
  }

  updateTrip(tripId: number, trip:ITrip):Observable<ITrip>{
    return this.http.put<ITrip>(`${this.tripUrl}/cities/${tripId}`, trip);
  }
}