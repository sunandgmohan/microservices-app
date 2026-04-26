const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("USER SERVICE RUNNING");
});

app.listen(3000, () => console.log("User Service running"));
