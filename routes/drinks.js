import { Router } from 'express'
import * as drinksCtrl from '../controllers/drinks.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', drinksCtrl.index)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, drinksCtrl.create)



export { router }
