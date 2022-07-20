import mongoose from 'mongoose'

const songSchema = new mongoose.Schema({
  img: String,
  name: String,
  artist: String,
  genre: String,
},{
  timestamps: true,
})

const Song = mongoose.model('Song', songSchema)

export { Song }