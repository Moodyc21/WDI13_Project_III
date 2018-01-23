const {Schema} = require('mongoose')

const HoleSchema = new Schema({

    holeNumber: {
        type: Number,
        required: [true, 'hole number is required!']
    },
    par: {
        type: Number,
        required: [true, 'par is required!']
    },
    yards: {
        type: Number, 
        required: [true, 'yards are required!']
    },
    strokes: {
        type: Number, 
        required: [false, 'strokes are not required!']
    }
},
{
    timestamps: {}
})

const ScorecardSchema = new Schema({

    course: {
        type: String, 
        required: [true, 'course is required!']
    },
    myRound: [HoleSchema]
}, 
{
    timestamps: {}
})

const UserSchema = new Schema({

    firstName: {
        type: String, 
        required: [true, 'first name is required!']
    }, 
    lastName: {
        type: String, 
        required: [true, 'last name is required']
    }, 
    email: {
        type: String, 
        required: [true, 'email is required!']
    }, 
    handicap: {
        type: Number, 
        required: [true, 'handicap is required!']
    },
    photoURL: {
        type: String, 
        default: 'https://i.imgur.com/X7CsuLzb.jpg'
    },
    myScore: [ScorecardSchema]

}, 
{
    timestamps: {},
    usePushEach: true
})

module.exports = {
    UserSchema, 
    ScorecardSchema,
    HoleSchema
}