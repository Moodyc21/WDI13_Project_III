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
    const newUser = await User.create({}) // create a new Idea, let Mongoose give the default values
    res.json(newUser) // Send this new idea back to the client
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

router.delete('/:userId', async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.userId) // Delete the idea from the database
    res.sendStatus(200) // Send back a status of 200 to tell the client that the delete was successful
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

router.patch('/:userId', async (req, res) => {
  try {

    // Update the idea in the database
    const updatedUser =
      await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})

    res.json(updatedUser) // Send the updated idea back to the client
  } catch (error) {
    console.log(error)
    res.sendStatus(500) // If there is any error, tell the client something went wrong on the server
  }
})

module.exports = router
