import mongoose from 'mongoose'
import { configDotenv } from 'dotenv'
configDotenv()
const DATA_BASE_URI = process.env.DATA_BASE_URI as string

export class MongoDbConnect {
  private static instance: MongoDbConnect
  private constructor() {}

  public static getInstance(): MongoDbConnect {
    if (!MongoDbConnect.instance) {
      MongoDbConnect.instance = new MongoDbConnect()
    }
    return MongoDbConnect.instance
  }

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(DATA_BASE_URI)
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.name, error.message)
      }
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect()
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.name, error.message)
      }
    }
  }

  public static getConnect(): typeof mongoose {
    return mongoose
  }
}
