const {Schema , model} = require('mongoose')

const taskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter the task name'],
        trim: true,
        maxlength: [20, 'Must not be more than 20 characters ']

    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = model('Task', taskSchema)

module.exports = Task