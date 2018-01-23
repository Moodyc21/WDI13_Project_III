require('dotenv').config()

const mongoose = require('mongoose')
const User = require('./models/User')
const Scorecard = require('./models/Scorecard')
const Holes = require('./models/Holes')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
    process.exit(-1)
})

// Delete all users, then add some fake ones
User.remove({}).then(() => {
    const golfer = new User({
        firstName: 'Bastien',
        lastName: 'Salabanzi',
        email: 'SalaB21@gmail.com',
        handicap: 4,
        photoURL: 'https://i.imgur.com/WSOJyR1b.jpg'
    })

    const score = new Scorecard({
        course: 'Laurel Springs'
    })
    const holeOne = new Holes({
        holeNumber: 1,
        par: 4,
        yards: 350,
        strokes: '',
    })
    const holeTwo = new Holes({
        holeNumber: 2,
        par: 3,
        yards: 180,
        strokes: '',
    })
    const holeThree = new Holes({
        holeNumber: 3,
        par: 4,
        yards: 415,
        strokes: '',
    })
    const holeFour = new Holes({
        holeNumber: 4,
        par: 5,
        yards: 475,
        strokes: '',
    })
    const holeFive = new Holes({
        holeNumber: 5,
        par: 4,
        yards: 320,
        strokes: '',
    })
    const holeSix = new Holes({
        holeNumber: 6,
        par: 4,
        yards: 420,
        strokes: '',
    })
    const holeSeven = new Holes({
        holeNumber: 7,
        par: 5,
        yards: 480,
        strokes: '',
    })
    const holeEight = new Holes({
        holeNumber: 8,
        par: 3,
        yards: 170,
        strokes: '',
    })
    const holeNine = new Holes({
        holeNumber: 9,
        par: 4,
        yards: 400,
        strokes: '',
    })
    const holeTen = new Holes({
        holeNumber: 10,
        par: 3,
        yards: 175,
        strokes: '',
    })
    const holeEleven = new Holes({
        holeNumber: 11,
        par: 4,
        yards: 360,
        strokes: '',
    })
    const holeTwelve = new Holes({
        holeNumber: 12,
        par: 5,
        yards: 500,
        strokes: '',
    })
    const holeThirteen = new Holes({
        holeNumber: 13,
        par: 4,
        yards: 300,
        strokes: '',
    })
    const holeFourteen = new Holes({
        holeNumber: 14,
        par: 3,
        yards: 175,
        strokes: '',
    })
    const holeFifteen = new Holes({
        holeNumber: 15,
        par: 5,
        yards: 530,
        strokes: '',
    })
    const holeSixteen = new Holes({
        holeNumber: 16,
        par: 4,
        yards: 320,
        strokes: '',
    })
    const holeSeventeen = new Holes({
        holeNumber: 17,
        par: 3,
        yards: 190,
        strokes: '',
    })
    const holeEighteen = new Holes({
        holeNumber: 18,
        par: 4,
        yards: 340,
        strokes: '',
    })
    
    score.myRound.push(holeOne, 
        holeTwo, 
        holeThree, 
        holeFour, 
        holeFive, 
        holeSix, 
        holeSeven, 
        holeEight, 
        holeNine, 
        holeTen, 
        holeEleven, 
        holeTwelve, 
        holeThirteen, 
        holeFourteen, 
        holeFifteen, 
        holeSixteen, 
        holeSeventeen, 
        holeEighteen 
    )

    golfer.myScore.push(score)

    return golfer.save()

}).catch((error) => {
    console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
    console.log(error)
}).then(() => {
    mongoose.connection.close()
    console.log(`
      Finished seeding database...
      
      Disconnected from MongoDB
    `)
})
