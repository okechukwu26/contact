export interface ICreateComment {
  flatId: string
  userId: string
  propertyId: string
  comment: string
  active: boolean
  complianId: string
}
export interface IReadComment {
  flatId?: string
  userId?: string
  propertyId?: string
  comment?: string
  active?: boolean
  complianId?: string
}
