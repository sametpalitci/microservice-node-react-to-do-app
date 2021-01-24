const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(express.json());

const posts = {};

app.use(cors());

app.get('/events', (req, res) => {
    res.send(posts);
})

app.post('/event', async (req, res) => {
    const { type, data } = req.body;
    if (type === 'TodoCreate') {
        const { id, todoText } = data;
        posts[id] = { id, todoText };
    }
    res.status(201).send(data);
})

app.listen(4002, (req, res) => {
    console.log("App is listen to 4002")
})