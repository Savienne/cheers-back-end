import mongoose from 'mongoose'

const drinkSchema = new mongoose.Schema({
  name: String,
  songs: [{ref:'comboSchema.name'}],
  _id: ObjectID,
},{
  timestamps: true,
})

const Drink = mongoose.model('Drink', drinkSchema)

export { Drink }