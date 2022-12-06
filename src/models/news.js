const moogoose = require('mongoose');

const New = moogoose.model('New', {
    name : {
        type: String,
        required: true
    },
    newspaper : {
        type: String,
        required: true,
    },
    country : {
        type: String,
        required: true,
        
    },
    author:{
        type: String
    }
})

module.exports = New
