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

app.post('/events', (req, res) => {
    let eventData = req.body;
    let event = new Event(eventData.eventName, eventData.date, eventData.category);
    eventRecommender.addEvent(event);
    res.send(event);
})

app.get('/events', (req, res) => {
    res.send(eventRecommender.events);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));