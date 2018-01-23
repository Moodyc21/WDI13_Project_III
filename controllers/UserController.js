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
module.exports = router;
