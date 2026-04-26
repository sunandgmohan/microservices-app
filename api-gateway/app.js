const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/users', async (req, res) => {
    const response = await axios.get('http://user-service:3000/users');
    res.json(response.data);
});

app.listen(3001, () => console.log("API Gateway running"));
