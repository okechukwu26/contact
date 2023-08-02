export interface ICreateContact {
  image: string
  phone: string
  isFavorite: boolean
  active: boolean
  user: string
  firstName: string
  lastName: string
}

export interface IReadContact {
  phone?: string
  isFavorite?: boolean
  _id?: string
  firstName?: string
  lastName?: string
}
