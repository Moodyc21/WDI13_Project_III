const mongoose = require('mongoose')
const { ScorecardSchema } = require('../schema')

const Scorecard = mongoose.model('Scorecard', ScorecardSchema)

module.exports = Scorecard 