import mongoose from 'mongoose'

const drinkSchema = new mongoose.Schema({
  name: String,
  category: String,
},{
  timestamps: true,
})

const Drink = mongoose.model('Drink', drinkSchema)

export { Drink }