export interface IFlat {
  propertyId: string
  flatId: string
  image: string
  status: string
  tenant: string
  description: string
  userId: string
  tenure: number
  price: number
  rentStarted: Date
  nextRentDate: Date
  flatNumber: number
  active: boolean
  totalServiceCharge: number
  serviceCharges: Record<string, any>
}

export enum FlatStatus {
  AVAILABLE = 'AVAILABLE',
  OCCUPIED = 'OCCUPIED',
}

export interface IReadFlat {
  userId?: string
  propertyId?: string
  status?: string
  active?: boolean
}
export interface AssignService {
  userId: string
  propertyId: string
  flatId: string
  service: [{ price: number; name: string }]
}
