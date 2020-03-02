const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const {EventRecommender, User,  Event} = require('./src/EventRecommender');
const eventRecommender = new EventRecommender();

app.use(bodyParser.json())
app.use(express.static('static'))

app.get('/hello-world', (req, res) => {
    res.send('Hello World');
});

app.post('/users', (req, res) => {
    let userData = req.body;
    let user = new User(userData.fName, userData.lName, userData.password);
    eventRecommender.addUser(user);
    res.send(user);
})

app.get('/users', (req, res) => {
    res.send(eventRecommender.users);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));