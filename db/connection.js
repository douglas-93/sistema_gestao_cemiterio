import dotenv from 'dotenv';
import { } from 'dotenv/config'
dotenv.config({ path: '../.env' })

import pkg from 'pg'
const { Pool } = pkg

const connectionString = process.env.DATABASE_CONNECTION

const connectionDB = new Pool({connectionString})

export default connectionDB