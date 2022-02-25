const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nextjsapp', { useNewUrlParser: true })
    .then(() => {
        const app = express()

        app.use(cors())
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())
        app.use('/api', routes)

        app.listen(PORT, () => {
            console.log(`Server is up and running on port 5000`);
        })
    })