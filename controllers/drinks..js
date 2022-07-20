import axios from 'axios'
import 'dotenv/config.js'
import { Drink } from '../models/drink'


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

  function create(req, res) {
    req.body.owner = req.user.profile
    Drink.create(req.body)
    .then(drink => {
      Drink.findById(drink._id)
      .populate('owner')
      .then(populatedDrink => {
        res.json(populatedDrink)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err: err.errmsg})
    })
  }
  export {
    index,
    create
  }