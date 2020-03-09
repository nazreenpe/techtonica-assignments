const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const { EventRecommender, User, Event } = require('./src/EventRecommender');
var pgp = require('pg-promise')();
var db = pgp('postgres://eventonica:eventonica@localhost:5432/eventonica');
const eventRecommender = new EventRecommender(db);

app.use(bodyParser.json())
app.use(express.static('static'))

app.get('/hello-world', (req, res) => {
    res.send('Hello World');
});

app.post('/users', (req, res) => {
    let userData = req.body;
    let user = new User(userData.fName, userData.lName, userData.password);
    eventRecommender.addUser(user, (savedUser) => {
        res.send(savedUser);
    }, (error) => {
        res.status(500).send({ "error": "Could not save User" });
    });
});

app.post('/users/delete', (req, res) => {
    let uId = req.body.uId;
    let password = req.body.password;
    if (eventRecommender.deleteUser(uId, password)) {
        res.send({ uId: uId });
    } else {
        res.sendStatus(404);
    }
});

app.get('/users', (req, res) => {
    eventRecommender.getUsers((users) => {
        res.send(users);
    }, (error) => {
        res.status(500).send({ "error": "Could not find Users" });        
    });
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

app.delete('/events/:eId', (req, res) => {
    let eId = req.params.eId;
    if (eventRecommender.deleteEvent(eId)) {
        res.send({ eId: eId });
    } else {
        res.sendStatus(404);
    }
});

app.post('/events/search', (req, res) => {
    let date = req.body.date;
    let category = req.body.category;

    if (date) {
        res.send(eventRecommender.findEventsByDate(date));
    } else if (category) {
        res.send(eventRecommender.findEventsByCategory(category));
    } else {
        res.sendStatus(400);
    }
});

app.post('/signups', (req, res) => {
    let eId = req.body.eId;
    let uId = req.body.uId;
    if (eventRecommender.saveUserEvent(uId, eId)) {
        res.send({ eId: eId, uId: uId });
    } else {
        res.sendStatus(404);
    }
});

app.get('/signups', (req, res) => {
    res.send(eventRecommender.userEvents);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));