import { Drink } from "../models/drink.js"

const index = async (req, res) => {
  try {
    const drinks = await Drink.find({})
    res.status(200).json(drinks)
  } catch (err) {
    res.status(500).json(err)
  }
}

const create = async (req, res) => {
  try {
    const drink = await Drink.create(req.body)
    res.status(201).json(drink)
  } catch (err) {
    res.status(500).json(err)
  }
}

export {
  index,
  create,
}