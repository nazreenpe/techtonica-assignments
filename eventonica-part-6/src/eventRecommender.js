const moment = require('moment');

class EventRecommender {
    constructor(db) {
        this.db = db;
        this.events = Object.create(null);
        this.users = Object.create(null);
        this.userEvents = Object.create(null);
    }

    addEvent(event, onSuccess, onFailure) {
        return this.db.one(
            'INSERT INTO events(eventname, date, category) VALUES($1, $2, $3) RETURNING eid',
            [event.eventName, event.date, event.category])
            .then(data => {
                event.eId = data.eid;
                onSuccess(event);
            })
            .catch(error => {
                onFailure(error);
            });
    }

    addUser(user, onSuccess, onFailure) {
        return this.db.one(
            'INSERT INTO users(fname, lname, password) VALUES($1, $2, $3) RETURNING uid',
            [user.fName, user.lName, user.password])
            .then(data => {
                user.uId = data.uid;
                onSuccess(user);
            })
            .catch(error => {
                onFailure(error);
            });
    }

    getUsers( onSuccess, onFailure) {
        return this.db.any(
            'SELECT * FROM users')
            .then(data => {
                let users = data.map(element => {
                    let user = new User(element.fname, element.lname, element.password)
                    user.uId = element.uid;
                    return user;
                });
                
                onSuccess(users);
            })
            .catch(error => {
                onFailure(error);
            });
    }
    

    saveUserEvent(uId, eId) {
        if (this.users[uId] != null && this.events[eId] != null) {
            if (this.userEvents[uId] == null) {
                this.userEvents[uId] = [eId];
            } else {
                this.userEvents[uId].push(eId);
            }
            return true;
        }
        return false;
    }

    deleteUser(id, password) {
        if(this.users[id] != null && this.users[id].password == password) {
            delete this.users[id];
            return true;
        }
        return false;
    }

    deleteEvent(id) {
        if(this.events[id] != null) {
            delete this.events[id];
            return true;
        } else {
            return false;
        }
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

    findEventsByCategory(category) {
        let eventKeys = Object.keys(this.events).filter(
            key => this.events[key].category == category
        );
        let eventsByCategory = [];
        eventKeys.forEach(key => eventsByCategory.push(this.events[key]));
        return eventsByCategory;
    }
}

class User {
    constructor(fName, lName, password) {
        this.fName = fName || "Anonymous";
        this.lName = lName || "";
        this.password = password;
        this.uId = undefined;
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
        this.eId = undefined;
    }

    addCategory(category) {
        this.category = category;
    }
    addDate(date) {
        this.date = moment(new Date(date)).format('MMM DD YYYY');
    }
}

if (typeof module != 'undefined'){
    module.exports = { EventRecommender, User,  Event} 
}


