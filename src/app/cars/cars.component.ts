import { CARS } from './../mock-cars';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars = CARS;
  


  constructor() { }

  ngOnInit(): void {
  }

}
