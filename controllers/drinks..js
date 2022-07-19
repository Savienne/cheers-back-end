import axios from 'axios'
import 'dotenv/config.js'


function index(req, res) {
    Drink.find({})
    .populate('owner')
    .then(drinks => {
      res.json(drinks)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err: err.errmsg})
    })
  }

  export {
    Drink
  }