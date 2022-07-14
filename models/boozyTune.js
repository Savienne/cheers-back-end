import mongoose from 'mongoose'

const boozyTuneSchema = new mongoose.Schema({
  song: {type: mongoose.Schema.Types.ObjectId, ref: 'Song'},
  pairedDrink: {type: mongoose.Schema.Types.ObjectId, ref: 'Drink'},
  profileComment: String
},{
  timestamps: true,
})

const BoozyTune = mongoose.model('BoozyTune', boozyTuneSchema)

export { BoozyTune }
