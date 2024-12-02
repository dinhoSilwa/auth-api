import { app } from './app'
import { MongoDbConnect } from './database/mongodb'
const PORT = process.env.PORT || 5000
export const StartServer = async () => {
  try {
    const db = MongoDbConnect.getInstance()
    await db.connect()
    app.listen(PORT, () => console.log(`Servidor Rodando na Porta ${PORT}`))
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.name, error.message)
      process.exit(1)
    }
  }
}

StartServer()
