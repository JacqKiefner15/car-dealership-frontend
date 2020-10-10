
export class Car {
  carMake: string
  carModel: string
  carYear: string
  carPrice: string
  carImg: string

  constructor ({
      carModel = '',
      carMake = '',
      carYear = null,
      carPrice = null,
      carImg = ''
  }) {
      Object.assign(this)
      this.carMake = carMake,
      this.carModel = carModel,
      this.carYear = carYear,
      this.carPrice = carPrice,
      this.carImg = carImg
  }
}


