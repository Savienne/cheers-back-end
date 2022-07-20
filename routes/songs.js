import { Router } from 'express'
import * as songsCtrl from '../controllers/songs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/search', songsCtrl.songSearch)
router.get('/', songsCtrl.index)



/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, songsCtrl.create)

export { router }
