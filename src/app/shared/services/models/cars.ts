
export class Car {
  carMake: string
  carModel: string
  carYear: string

  constructor ({
      carModel = '',
      carMake = '',
      carYear = null,
  }) {
      Object.assign(this)
      this.carMake = carMake
      this.carModel = carModel
      this.carYear = carYear
  }
  _
}


