# Eventonica
Eventonica is an event management system. It lets users browse a list of events and save the ones they are interested in. 

The project is built using Object Oriented Programming principles in javascript.

In this section:
- Added persistence using PostgreSQL and `pg-promise`
- Interact with database in asynchronous way using promises and callbacks

## PostgreSQL setup

_A database dump is checked in `eventonica-dump.sql`_

Create user:
```
CREATE USER eventonica WITH password '<password>';
```

Give user permission to create new databases:
```
ALTER USER eventonica CREATEDB;
```

Create `eventonica` database:
```
CREATE DATABASE eventonica WITH OWNER eventonica;
```

Create `users` table
```
 CREATE TABLE users(
    fName varchar(256) not null,
    lName varchar(256) not null,
    password varchar(256) not null,
    uId SERIAL PRIMARY KEY
);
```

Create `events` table:
```
CREATE TABLE events(
    eventname varchar(256) not null,
    date date not null,
    category varchar(256) not null,
    eid serial PRIMARY KEY
);
```

Create `user_events` table:
```
CREATE TABLE user_events(
    id varchar(36) PRIMARY KEY,
    uid INTEGER,
    eid INTEGER
);
```