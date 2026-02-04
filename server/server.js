import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'

const app = express() 

app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

app.get('/' , (_req , res) => res.send('server is live'))

const PORT = process.env.PORT || 5000

app.listen(PORT , ()=> console.log(`server running on ${PORT}`)) 
