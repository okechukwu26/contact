import { ValidationChain } from 'express-validator'
import { complian, flatId, tenantId } from '../../lib/middleware'

export const complianSchema = (): ValidationChain[] => [
  flatId,
  tenantId,
  complian,
]
