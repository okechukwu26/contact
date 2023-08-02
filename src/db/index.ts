import mongoose from 'mongoose'
import { logger } from '../lib/helper'

export const DATABASE = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://priceblings:Okechukwu29@cluster0.d8bojru.mongodb.net/property`,
    )
    logger.info(
      `database has been connected successfully to ${JSON.stringify(
        connect.connection.host,
      )}`,
    )
  } catch (error) {
    logger.error(`Mongodb connection error ${JSON.stringify(error)}`)
    process.exit(1)
  }
}
