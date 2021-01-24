const express = require('express');
const { randomBytes } = require('crypto')
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());

app.use(express.json());

app.post('/todos', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const {todoText} = req.body;
    
    await axios.post('http://localhost:4001/events', {
        type: 'TodoCreate',
        data: {
            id,
            todoText
        }
    })

    res.send({});
})

app.listen(4000, (req, res) => {
    console.log("App is listen to 4000")
})