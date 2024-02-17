const express = require('express');
require('dotenv').config()
require('./models/db')
const User = require('../models/user')


const app = express();

app.post('/create-user', async (req, res) => {
    const user = await User({ fullname: 'JohnDoe', email: 'john@email.com', password: '1234' })
})

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(8000, () => {
    console.log('listening on port 8000 ')
})

