import { Car } from './../shared/services/models/cars';
import { Router } from '@angular/router';
import { CARS } from './../mock-cars';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
@Input() car: Car
carImg: string
  cars = CARS;



  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  routeToViewCar(id: number) {
    this.router.navigate([`/cars/${id}`])
  }





}
