import express, { json, urlencoded, Response, NextFunction } from 'express'
import cors from 'cors'
import listEndPoints from 'express-list-endpoints'
import { logger, ResponseHandler } from '../lib/helper'
import router from '../routes'
import { IError, IRequest } from '../interface'

const app = express()
const { badRequest } = ResponseHandler

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(router)
logger.info(listEndPoints(app))
app.use((err: IError, req: IRequest, res: Response, next: NextFunction) => {
  logger.info(`Log error ${JSON.stringify(err.code)}`)
  badRequest(res, 400, err.message || 'Failed', next)
})

export default app
