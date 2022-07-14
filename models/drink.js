import mongoose from 'mongoose'

const drinkSchema = new mongoose.Schema({
  name: String,
  songs: [{type: mongoose.Schema.Types.ObjectId, ref:'BoozyTune.name'}],
},{
  timestamps: true,
})

const Drink = mongoose.model('Drink', drinkSchema)

export { Drink }