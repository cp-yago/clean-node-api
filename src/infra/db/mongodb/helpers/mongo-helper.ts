import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = new MongoClient(uri)
    await this.client.connect()
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
