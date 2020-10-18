
export class Car {
  id: number
  carMake: string
  carModel: string
  carYear: string
  carPrice: string
  carImg: string
  carColor?: string
  carDescription?: string
  carWarrantyType?: string
  carDown?: string

  constructor ({
      id = null,
      carModel = '',
      carMake = '',
      carYear = null,
      carPrice = null,
      carImg = '',
      carColor = '',
      carDescription = '',
      carWarrantyType = '',
      carDown = ''
  }) {
      Object.assign(this)
      this.id = id,
      this.carMake = carMake,
      this.carModel = carModel,
      this.carYear = carYear,
      this.carPrice = carPrice,
      this.carImg = carImg,
      this.carColor = carColor,
      this.carDescription = carDescription,
      this.carWarrantyType = carWarrantyType
      this.carDown = carDown
  }

}


