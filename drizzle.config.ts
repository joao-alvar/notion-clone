import {defineConfig} from 'drizzle-kit'
import * as dotenv from 'dotenv'

dotenv.config({path: '.env.local'})

if (!process.env.DATABASE_URL) {
  console.log('🔴 Cannot find database url')
}

export default defineConfig({
  schema: './src/lib/supabase/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
    database: 'postgres',
    port: Number(process.env.DATABASE_PORT),
    host: 'aws-0-us-east-1.pooler.supabase.com',
    user: 'postgres.user',
    password: process.env.PW || '',
  },
})
