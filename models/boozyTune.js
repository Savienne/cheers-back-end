import mongoose from 'mongoose'

const Schema = mongoose.Schema

const boozyTuneSchema = new Schema({
  song: {type: Schema.Types.ObjectId, ref: 'Song'},
  pairedDrink: {type: Schema.Types.ObjectId, ref: 'Drink'},
  profileComment: String
},{
  timestamps: true,
})

const BoozyTune = mongoose.model('BoozyTune', boozyTuneSchema)

export { BoozyTune }
