import { BoozyTune } from '../models/boozyTune.js'

const create = async (req, res) => {
  try {
    req.body.author = req.user.profile
    const boozyTune = await BoozyTune.create(req.body)
    res.status(201).json(boozyTune)
  } catch (err) {
    res.status(500).json(err)
  }
}

const index = async (req, res) => {
  try {
    const boozyTunes = await BoozyTune.find({})
    res.status(200).json(boozyTunes)
  } catch (err) {
    res.status(500).json(err)
  }
}

export{
    create,
    index
}