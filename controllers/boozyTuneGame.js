import { Song } from '../models/song.js'
import { Drink } from "../models/drink.js"

const createPoll = async (req, res) => {
    try {
      req.body.author = req.user.profile
      const Poll = await Poll.create(req.body)
      res.status(201).json(songs, drinks)
    } catch (err) {
      res.status(500).json(err)
    }
  }
  
  const index = async (req, res) => {
    try {
      const Poll = await Profile.find({})
      res.status(200).json(songs, drinks)
    } catch (err) {
      res.status(500).json(err)
    }
  }
   export {
    index,
    createPoll
   }