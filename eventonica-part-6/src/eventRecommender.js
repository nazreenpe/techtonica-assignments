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

    getEvents(onSuccess, onFailure) {
        return this.db.any(
            'SELECT * FROM events')
            .then(data => {
                let events = data.map(element => {
                    let event = new Event(element.eventname, element.date, element.category)
                    event.eId = element.eid;
                    return event;
                });

                onSuccess(events);
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

    getUsers(onSuccess, onFailure) {
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

    deleteUser(id, password, onSuccess, onFailure) {
        return this.db.result(
            'DELETE FROM users WHERE uid=$1 AND password=$2', [id, password])
            .then((result) => { onSuccess() })
            .catch((error) => { onFailure(error) });
    }

    deleteEvent(id, onSuccess, onFailure) {
        return this.db.result('DELETE FROM events WHERE eid=$1', [id])
            .then((result) => { onSuccess() })
            .catch((error) => { onFailure(error) });
    }

    findEventsByDate(date, onSuccess, onFailure) {
        return this.db.any(
            'SELECT * FROM events WHERE date=$1', [date])
            .then(data => {
                let events = data.map(element => {
                    let event = new Event(element.eventname, element.date, element.category)
                    event.eId = element.eid;
                    return event;
                });

                onSuccess(events);
            })
            .catch(error => {
                onFailure(error);
            });
    }

    findEventsByCategory(category, onSuccess, onFailure) {
        return this.db.any(
            'SELECT * FROM events WHERE category=$1', [category])
            .then(data => {
                let events = data.map(element => {
                    let event = new Event(element.eventname, element.date, element.category)
                    event.eId = element.eid;
                    return event;
                });

                onSuccess(events);
            })
            .catch(error => {
                onFailure(error);
            });
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
        this.date = new Date(date);
        this.category = category || "Random";
        this.eId = undefined;
    }

    addCategory(category) {
        this.category = category;
    }
    addDate(date) {
        this.date = new Date(date);
    }
}

if (typeof module != 'undefined') {
    module.exports = { EventRecommender, User, Event }
}


