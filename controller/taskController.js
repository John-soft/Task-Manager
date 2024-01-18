const Task = require('../model/task')
const asyncWrapper = require('../utils/async')
const {createCustomError} = require('../utils/customError')

const getAllTasks = asyncWrapper( async (req, res, next) => {
    const tasks = await Task.find()
    res.status(200).json({
        length: tasks.length,
        tasks
    })
})


const createTask = asyncWrapper( async (req, res, next) => {
        const task = await Task.create(req.body)
        res.status(201).json({
            status: 'Failed',
            task
        })
})


const getTask = asyncWrapper( async (req, res, next) => {
    const taskId = req.params.id
    const task = await Task.findById(taskId)
    if (!task) {
        return next(createCustomError('Task with the given ID does not exist', 404))
    }
    res.status(200).json({
        task
    }) 
})


const updateTask = asyncWrapper(async (req, res, next) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!updatedTask) {
        res.status(404).json({
            msg: "Task with the provided ID does not exist"
    })
    }
    res.status(201).json({
        status: 'Success',
        message: 'Data updated successfully',
        data: {
            updatedTask
        }
    })
})


const deleteTask = asyncWrapper(async (req, res, next) => {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)
        if (!deletedTask) {
            res.status(404).json({
                msg: "Task with the provided ID does not exist"
        })
        }
        res.status(201).json({
            status: 'Success',
            message: 'Data deleted successfully',
            data: null
        })
})


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}