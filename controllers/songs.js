// import { Song } from '../models/song.js'
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

export {
  songSearch
}