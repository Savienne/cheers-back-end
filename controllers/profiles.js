import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

function index(req, res) {
  Profile.find({})
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
  console.log(req.params.id)
  console.log(req.body)
  Profile.findById(req.params.id)
  .then(profile => {
    console.log(profile._id, "PROFILE ID")
    console.log(req.user._id, "req.user ID")
    console.log(req.params.id, "req.params ID")
    if (profile._id.equals(req.user.profile)) {
      Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedProfile => {
        res.json(updatedProfile)
      })
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
