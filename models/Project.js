const mongoose= require('mongoose')

const ProjectShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description can not be more than 500 characters']
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
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Project', ProjectShema)