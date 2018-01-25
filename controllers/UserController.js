const express = require('express');
const router = express.Router();
const User = require('../db/models/User')

router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users) 
  } catch (error) {
    console.log(error)
    res.sendStatus(500) 
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body) 
    res.json(newUser) 
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

router.delete('/:userId', async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.userId) 
  } catch (error) {
    console.log(error)
    res.sendStatus(500) 
  }
})

router.patch('/:userId', async (req, res) => {
  try {

    const updatedUser =
      await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})

    res.json(updatedUser)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

module.exports = router
