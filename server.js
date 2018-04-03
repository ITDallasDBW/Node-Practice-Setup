const express = require('express')
const app = express()
const reviewRouter = require('./review/router')

app.use(express.static('public'))

app.use('/api/review', reviewRouter)

app.listen(8080, () => console.log('Running'))
