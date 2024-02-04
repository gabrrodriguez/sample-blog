import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRoutes from './routes/user.route.js'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO)
    .then(() => {
    console.log(`MongoDB is connected.`)
    })
    .catch((err) => {
        console.log(err)
    })

app.use('/api/v1/user', userRoutes)

app.listen(3000, () => {
    console.log(`Server is up and listening on port 3000`)
}) 

