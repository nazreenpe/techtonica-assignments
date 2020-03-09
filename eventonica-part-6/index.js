const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const { EventRecommender, User, Event } = require('./src/EventRecommender');
var pgp = require('pg-promise')();
const uuidv4 = require('uuid').v4;
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

    eventRecommender.deleteUser(uId, password,
        () => { res.send({ "uId": uId }) },
        (error) => { res.status(404).status("Could not find the User") });
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
    eventRecommender.addEvent(event, (savedEvent) => {
        res.send(savedEvent);
    }, (error) => {
        res.status(500).send({ "error": "Could not save Event" });
    });
})

app.get('/events', (req, res) => {
    eventRecommender.getEvents((events) => {
        res.send(events);
    }, (error) => {
        res.status(500).send({ "error": "Could not find Events" });
    });
});

app.delete('/events/:eId', (req, res) => {
    let id = req.params.eId;

    eventRecommender.deleteEvent(id,
        () => { res.send({ "eId": id }) },
        (error) => { res.status(404).status("Could not find the event") });
});

app.post('/events/search', (req, res) => {
    let date = req.body.date;
    let category = req.body.category;

    if (date) {
        eventRecommender.findEventsByDate(date,
            (events) => {
                res.send(events)
            },
            (error) => {
                res.status(404).send({ "error": "Could not find Events matching the date" })
            });
    } else if (category) {
        eventRecommender.findEventsByCategory(category,
            (events) => {
                res.send(events)
            },
            (error) => {
                res.status(404).send({ "error": "Could not find Events matching the category" })
            });
    } else {
        res.status(400).send({ "error": "Invalid search criteria"});
    }
});

app.post('/signups', (req, res) => {
    let eId = req.body.eId;
    let uId = req.body.uId;

    eventRecommender.saveUserEvent(uId, eId, 
        (uId, eId) => {res.send({ eId: eId, uId: uId });}, 
        () => { res.status(404);});
    
});

app.get('/signups', (req, res) => {
    eventRecommender.getUserEvents((events) => {
        res.send(events);
    }, (error) => {
        res.status(500).send({ "error": "Could not find Events" });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));