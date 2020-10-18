import { getTestBed } from '@angular/core/testing';
import { Car } from './../shared/services/models/cars';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsComponent } from './../cars/cars.component';
import { CarService } from './../shared/services/car.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.scss']
})
export class SingleCarComponent implements OnInit {
  errorMessage = '';
  car: Car | undefined;
  private subs = new Subscription()

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute,)
     { }

  ngOnInit(): void {
    //  this.route.params.subscribe( car => {
    //   if ( car && car.id ) {
    //     this.getOurCar(car.id)
    //     }
    //  })
     const param = this.route.snapshot.paramMap.get('id');
     if (param) {
       const id = +param;
       this.getOurCar(id);
     }

  }

  getOurCar(id: number): void {
    this.carService.getCar(id).subscribe({
      next: bigCar => this.car = bigCar,
      error: err => this.errorMessage = err
    });
  }

  // retrieveCar(id: number) {
  //   const params = id
  //   this.subs.add(
  //     this.carService.getCar(params).subscribe(data => {
  //       if (data) {
  //         console.log(data)
  //         this.car = new Car(data)
  //         this.car.carImg = this.carImg
  //            }
  //     })
  //   )
  // }
 }
