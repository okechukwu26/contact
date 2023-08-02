import { ValidationChain } from 'express-validator'
import { flatId, propertyId, userId } from '../../lib/middleware'
import { comment, complianId } from '../../lib/middleware/schema'
export const CommentSchema = (): ValidationChain[] => [
  flatId,
  userId,
  propertyId,
  complianId,
  comment,
]
