import { Router } from 'express'
import * as songsCtrl from '../controllers/songs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', songsCtrl.songSearch)
router.post('/', songsCtrl.addSong)

export { router }
