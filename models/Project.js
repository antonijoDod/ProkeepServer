const mongoose= require('mongoose')

const ProjectShema = new mongoose.Schema({
    projectName: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    customerName: {
        type: String,
        required: [true, 'Please add a customer name']
    },
    customerOtherInfo: {
        type: String
    },
    customerEmail: {
        type: String,
        match: [
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            'Please add a valid mail'
        ]
    },
    pending: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        default: 'no-photo.js'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Project', ProjectShema)