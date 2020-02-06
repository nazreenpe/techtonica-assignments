moment = require('moment');

class EventRecommender {
    constructor() {
        this.events = [];
        this.users = [];
        this.userEvents = [];
    }

    addEvent(event) {
        this.events.push(event);
    }

    addUser(user) {
        this.users.push(user);
    }

    saveUserEvent(uId, eId) {
        let element = {};
        let userKey = this.users.filter(user => user.uId === uId);
        let elementValue = this.events.filter(event => event.eId === eId);

        if(this.userEvents.includes(userKey)) {
            this.userEvents[userKey].push(elementValue);
        } else {
            element[userKey] = elementValue;
            this.userEvents.push(element); 
        }
        // Allow users to save events to a personal Events array.
    }

    deleteUser(id) {
        delete this.users.filter(user => user.uId === id);
    }

    deleteEvent(id) {
        delete this.events.filter(event => event.eId === id);
    }

    findEventsByDate(date) {
        let filteringDate = moment(new Date(date)).format('MMM DD YYYY');
        return this.events.filter(event => event.date === filteringDate);

    }

    findEventsbyCategory(category) {
        return this.events.filter(event => event.category == category);
    }
}

class User {
    constructor(fName, lName) {
        this.fName = fName || "Anonymous";
        this.lName = lName || "";
        this.uId = Math.random().toString(36).substr(2, 9);
    }

    get name() {
        return this.fName + " " + this.lName;
    }
}

class Event {
    constructor(eventName, date, category) {
        this.eventName = eventName || "Anonymous Event!";
        this.date = moment(new Date(date)).format('MMM DD YYYY') || '';
        this.category = category || "Random";
        this.eId = Math.random().toString(36).substr(2, 9);
    }

    addCategory(category) {
        this.category = category;
    }
    addDate(date) {
        this.date = moment(new Date(date)).format('MMM DD YYYY');
    }
}

module.exports = { EventRecommender, User, Event};

