const moogoose = require('mongoose');

const Feedback = moogoose.model('Feedback', {
    comment : {
        type: String,
        required: true
    },
})

module.exports = Feedback
