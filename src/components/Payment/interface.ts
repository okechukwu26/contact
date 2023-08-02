export interface ICreatePayment {
  flatId?: string
  userId: string
  paymentTpe: string
  amount: number
  method: string
  referenceId: string
  propertyId: string
}
