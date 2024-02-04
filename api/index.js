import express from 'express'

const app = express()

app.get("/", (req, res) => {
    res.send("You are pinging the Express Server.")
})

app.listen(3000, () => {
    console.log(`Server is up and listening on port 3000`)
})