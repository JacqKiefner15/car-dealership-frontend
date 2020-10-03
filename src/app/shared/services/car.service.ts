//import { Movie } from './models/movie';
import { Car } from './models/cars';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private movieApi: string;
  private carUrl='assets/data/cars.json'

  constructor(
    private http: HttpClient
  ) {
    // this.movieApi = `${environment.apiUrl}api/v1/movies`;

   }
   getAllCars(): Observable<Car[]> {
    // return this.http.get<Movie[]>(`${this.movieApi}/index`);
    return this.http.get<Car[]>(this.carUrl);
  }

}
