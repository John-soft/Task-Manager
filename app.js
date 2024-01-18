const express = require('express')
let app  = express()

const taskRouter = require('./routes/taskRoutes')
const errorController = require('./controller/errorController')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', taskRouter)
app.use('*', (res, req, next) => {
    res.status(404).json({
        message: `Page not found ${req.originalUrl}`
    })
    next()
})

app.use(errorController)

module.exports = app