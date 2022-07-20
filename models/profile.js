import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  name: String,
  photo: String,
  favoriteSong: { type: mongoose.Schema.Types.ObjectId, ref: 'Song' },
  favoriteDrink: {type: mongoose.Schema.Types.ObjectId, ref: 'Drink'},
  boozyTunes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BoozyTune' }]

},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }