// import { Song } from '../models/song.js'
// import { v2 as cloudinary } from 'cloudinary'
// import axios from 'axios'
import 'dotenv/config.js'

// const BASE_URL = 'https://www.theaudiodb.com/api/v1/json/'

function songSearch(req, res) {
  // axios.get(`${BASE_URL}${process.env.API_KEY}/track.php?h=32793500`)
  axios.get('https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay')
  .then(songs => {
    res.json({songs: songs.data})
  })
}

export {
  songSearch
}