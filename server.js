const mongoose = require('mongoose')
const app = require('./app')
require('dotenv').config()

mongoose.connect(process.env.CONN_STR, {useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: false, useFindAndModify: false}).then(() => {
    console.log('DB Connection Successful')
}).catch((err) => {
    console.log(err)
})

const PORT = process.env.PORT
app.listen(PORT, 'localhost', () => {
    console.log(`Server is up and running on port ${PORT}`)
})