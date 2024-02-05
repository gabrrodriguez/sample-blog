import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO)
    .then(() => {
    console.log(`MongoDB is connected.`)
    })
    .catch((err) => {
        console.log(err)
    })

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/auth', authRoutes)

app.listen(3000, () => {
    console.log(`Server is up and listening on port 3000`)
}) 

