const express = require('express');
const app = express();
const port = 3000;
const {EventRecommender} = require('./src/EventRecommender');
const er = new EventRecommender();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));