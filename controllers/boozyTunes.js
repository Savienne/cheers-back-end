import { BoozyTune } from '../models/boozyTune.js'

const create = async (req, res) => {
  try {
    const boozyTune = await BoozyTune.create(req.body)
    res.status(201).json(boozyTune)
  } catch (err) {
    res.status(500).json(err)
  }
}

const index = async (req, res) => {
  try {
    const boozyTune = await BoozyTune.find({})
    res.status(200).json(boozyTune)
  } catch (err) {
    res.status(500).json(err)
  }
}

export {
  create
}