import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

function index(req, res) {
  Profile.find({})
  .populate('favoriteDrink')
  .populate('favoriteSong')
  .populate('boozyTunes')
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${profile.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

function updateProfile(req, res){
  Profile.findById(req.params.id)
  .then(profile => {
    if (profile._id.equals(req.user.profile)) {
      Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .populate('favoriteDrink')
      .populate('favoriteSong')
      .populate('boozyTunes')
      .then(updatedProfile => {
        res.json(updatedProfile)
      })
    } else {
      res.status(401).json({err: "Not authorized!"})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}


export {
  index,
  addPhoto,
  updateProfile,
}
