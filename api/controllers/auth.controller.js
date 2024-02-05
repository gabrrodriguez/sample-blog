import User from '../model/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    // console.log(req.body)
    const { username, email, password } = req.body

    if(!username || !email || !password || username === '' || email === '' || password === '' ) {
        return res.status(400).json({
            message: 'A username, email, and password are required. One or all of these fields are missing.'
        })
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({username, email, password: hashedPassword})

    try {
        await newUser.save()
        res.status(200).json({message: 'A new user is created.'})
    } catch (error) {
        console.log(`The request failed per the following error: ${error}`)
        res.status(400).json({message: `The request to create a new User failed`, error })
    }
}