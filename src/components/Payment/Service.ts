import { ResponseHandler, logger } from '../../lib/helper'
import { Payment } from './model'
import { PAYSTACK_KEY } from '../../config'
import axios from 'axios'
import { ICreatePayment } from './interface'
import { Flat } from '../Flat/model'

const { throwError } = ResponseHandler

export class PaymentService {
  static async create(input: ICreatePayment) {
    const payment = await this.verifyRef(input.referenceId)
    input.amount = payment.data.amount / 100

    return await Payment.create(input)
  }

  static async verifyRef(ref) {
    console.log(ref.ref)
    const headers = {
      Authorization: `BEARER ${PAYSTACK_KEY}`,
    }
    try {
      const payment = await axios.get(
        `https://api.paystack.co/transaction/verify/${ref}`,
        { headers },
      )
      return payment.data
    } catch (error) {
      logger.error(error)
      throwError(error, 400)
    }
  }
}
