import express, { Application } from 'express'
import cors from 'cors'
import { corOptions } from './middlewares/corsOptions'

export const app: Application = express()
app.use(cors(corOptions))
app.use(express.json())
//app.use('/api/auth', ) adicionar rota
