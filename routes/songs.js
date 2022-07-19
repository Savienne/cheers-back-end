import { Router } from 'express'
import * as songsCtrl from '../controllers/songs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/:search', songsCtrl.songSearch)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

export { router }
