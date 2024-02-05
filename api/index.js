// Module Dependencies
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Route Import Statements
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

// Utility functions for Express
dotenv.config()
const app = express()
app.use(express.json())

// Database Connection
mongoose.connect(process.env.MONGO)
    .then(() => {
    console.log(`MongoDB is connected.`)
    })
    .catch((err) => {
        console.log(err)
    })

// Routes Handlers
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/auth', authRoutes)

// Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode, 
        message
    })
})

// Server Listener
app.listen(3000, () => {
    console.log(`Server is up and listening on port 3000`)
}) 

