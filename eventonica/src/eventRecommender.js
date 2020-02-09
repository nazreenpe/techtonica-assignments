moment = require('moment');

class EventRecommender {
    constructor() {
        this.events = Object.create(null);
        this.users = Object.create(null);
        this.userEvents = Object.create(null);
    }

    addEvent(event) {
        this.events[event.eId] = event;
    }

    addUser(user) {
        this.users[user.uId] = user;
    }

    saveUserEvent(uId, eId) {
        if (this.users[uId] != null && this.events[eId] != null) {
            if (this.userEvents[uId] == null) {
                this.userEvents[uId] = [eId];
            } else {
                this.userEvents[uId].push(eId);
            }
        }
    }

    deleteUser(id) {
        delete this.users[id];
    }

    deleteEvent(id) {
        delete this.events[id];
    }

    findEventsByDate(date) {
        let filteringDate = moment(new Date(date)).format('MMM DD YYYY');
        let eventKeys = Object.keys(this.events).filter(
            key => this.events[key].date == filteringDate
        );
        let eventsByDate = [];
        eventKeys.forEach(key => eventsByDate.push(this.events[key]));
        return eventsByDate;
    }

    findEventsbyCategory(category) {
        let eventKeys = Object.keys(this.events).filter(
            key => this.events[key].category == category
        );
        let eventsByCategory = [];
        eventKeys.forEach(key => eventsByCategory.push(this.events[key]));
        return eventsByCategory;
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

module.exports = { EventRecommender, User, Event };

