import mongoose from 'mongoose'

const songSchema = new mongoose.Schema({
  _id: ObjectId,
  img: string,
  name: string,
  artist: string,
  genre: string,
},{
  timestamps: true,
})

const Song = mongoose.model('Song', songSchema)

export { Song }