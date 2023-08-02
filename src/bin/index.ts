import app from '../app'
import { createServer } from 'http'
import { logger } from '../lib/helper'
import { DATABASE } from '../db'

const port = 5000

DATABASE()
createServer(app).listen(port, () => {
  logger.info(`server  is listening on port ${port}`)
})
