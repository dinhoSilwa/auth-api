import type { CorsOptions } from 'cors'

export const corOptions: CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATH'],
  allowedHeaders: ['Content-type', 'Authorization'],
}
