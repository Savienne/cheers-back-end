import { Router } from "express";
import * as boozyTunesCtrl from '../controllers/boozyTunes.js'

const router = Router()

/*----------- PUBLIC ROUTES ------------*/




/*----------- PROTECTED ROUTES ------------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, boozyTunesCtrl.create)


export { router }