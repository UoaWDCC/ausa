import 'dotenv/config'
import cors from 'cors'
import helmet from 'helmet'
import express, { Express, Request, Response } from 'express'

import { RegisterRoutes } from 'middleware/__generated__/routes'

import * as swaggerJson from './middleware/__generated__/swagger.json'
import * as swaggerUI from 'swagger-ui-express'

const app: Express = express()

app.use(helmet())
app.use(express.json())
app.use(cors())

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJson))

app.get('/', (_req: Request, res: Response) => {
  res.send('AUSA backend server is up!')
})

RegisterRoutes(app)

const port = process.env.PORT || 8000

const _app = app.listen(port, () => {
  console.log(`AUSA backend server listening on port ${port}.`)
})

// So we can use for testing
export { _app }
