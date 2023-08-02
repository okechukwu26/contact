export interface IComplain {
  flatId: string
  tenantId: string
  complian: string
  createdAt: Date
  updatedAt: Date
  active: boolean
}
export interface IReadComplian {
  flatId?: string
  tenant?: string
  active?: boolean
}
