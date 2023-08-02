import { ValidationChain } from 'express-validator'
import { service } from '../../lib/middleware'

export const serviceChargeSchema = (): ValidationChain[] => [service]
