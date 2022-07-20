import { Song } from '../models/song.js'
// import { v2 as cloudinary } from 'cloudinary'
import axios from 'axios'
import 'dotenv/config.js'

const BASE_URL = 'https://www.theaudiodb.com/api/v1/json/'

function songSearch(req, res) {
  console.log(req.query)
  axios.get(`${BASE_URL}${process.env.API_KEY}/searchtrack.php?s=${req.query.artist}&t=${req.query.song}`)
  .then(songs => {
    res.json({songs: songs.data})
  })
}



function index(req, res) {
  console.log(result.strTrack)
  Track.find({})
  .populate('result.strTrack')
  .then(songs => {
    res.json(song)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function create(req, res) {
  req.body.owner = req.user.profile
  Song.create(req.body)
  .then(song => {
    Song.findById(song._id)
    .populate('owner')
    .then(populatedSong => {
      res.json(populatedSong)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
const index = async (req, res) => {
  try {
    const songs = await Song.find({})
    res.status(200).json(songs)
  } catch (err) {
    res.status(500).json(err)
  }
}

const create = async (req, res) => {
  try {
    const song = await Song.create(req.body)
    res.status(201).json(song)
  } catch (err) {
    res.status(500).json(err)
  }
}

export {
  songSearch,
  index,
  create
}