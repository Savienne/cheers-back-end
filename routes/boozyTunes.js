import { Router } from "express";
import * as boozyTunesCtrl from '../controllers/boozyTunes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*----------- PUBLIC ROUTES ------------*/




/*----------- PROTECTED ROUTES ------------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, boozyTunesCtrl.create)
router.get('/', checkAuth, boozyTunesCtrl.index)


export { router }