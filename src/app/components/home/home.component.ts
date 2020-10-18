import { CarService } from './../../shared/services/car.service';
import { Car } from './../../shared/services/models/cars';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cars: Car[] = []

  constructor(
    private carService: CarService,
    private storageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.retreiveAllCars()
    this.setMyEmailInStorage()

  }

  setMyEmailInStorage() {
    this.storageService.setItem('myEmail', 'jacq@email.com')
  }

  retreiveAllCars() {
    this.carService.getAllCars().subscribe(incomingCars => {
      if (incomingCars) {
        this.cars = incomingCars
      }
    }, error => {
      if (error) {
        console.log(error)
      }
    })
  }

}
