const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.post('/events', async (req, res) => {
    const event = req.body;

    await axios.post('http://localhost:4002/event',event);

    res.send({});
})

app.listen(4001, (req, res) => {
    console.log("App is listen to 4001")
})