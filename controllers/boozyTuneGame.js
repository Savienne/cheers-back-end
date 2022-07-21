import { BoozyTuneGame } from '../models/boozyTuneGame.js'

const RandomSong = async (req, res) => {
  try {
    req.body.author = req.user.profile
    const boozyTuneGame = await BoozyTuneGame.create(req.body)
    res.status(201).json(Math.random.song)
  } catch (err) {
    res.status(500).json(err)
  }
}

const index = async (req, res) => {
  try {
    const boozyTuneGame= await BoozyTuneGame.find({})
    res.status(200).json(getrandom.song)
  } catch (err) {
    res.status(500).json(err)
  }
}

export{
    RandomSong,
    index
}