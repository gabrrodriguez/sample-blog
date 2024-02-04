import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO)
    .then(() => {
    console.log(`MongoDB is connected.`)
    })
    .catch((err) => {
        console.log(err)
    })

app.get("/", (req, res) => {
    res.send("You are pinging the Express Server.")
})

app.listen(3000, () => {
    console.log(`Server is up and listening on port 3000`)
}) 