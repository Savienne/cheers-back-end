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
    const boozyTunes = await BoozyTune.find({})
    res.status(200).json(boozyTunes)
  } catch (err) {
    res.status(500).json(err)
  }
}

const deleteOne = async (req, res) => {
  const boozyTunes = await BoozyTune.findById(req.params)
}

export {
  create,
  index,
  deleteOne as delete,
}