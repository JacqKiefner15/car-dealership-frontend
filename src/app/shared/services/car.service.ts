//import { Movie } from './models/movie';
import { Car } from './models/cars';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private productUrl = '../assets/data/cars.json';

  constructor(private http: HttpClient) { }

  getCarById(params) {
    return this.http.get<any>(`${this.productUrl}/show?id=${params.id}`);
  }

  getCar(id: number): Observable<Car | undefined> {
    return this.getAllCars()
      .pipe(
        map((thisCar: Car[]) => thisCar.find(p => p.id === id))
      );
  }

  getAllCars() {
    return this.http.get<Car[]>(this.productUrl)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
