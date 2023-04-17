interface Image {
  id: number,
  name: string,
  image: string
}

export interface ICity {
  id: number,
  country: string,
  city: string,
  departureDate: string,
  returnDate: string,
  mainImage: Image,
  secondaryImages: Image[],
  travelDescription:string,
  advantages: string[],
  disadvantages: string[],
  advices: string[],
  abstract: string,
  isMain: boolean
}
