const mongoose = require('mongoose')
const { HoleSchema } = require('../schema')

const Holes = mongoose.model('Holes', HoleSchema)

module.exports = Holes