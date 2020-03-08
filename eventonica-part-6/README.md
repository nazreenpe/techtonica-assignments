# Eventonica
Eventonica is an event management system. It lets users browse a list of events and save the ones they are interested in. 

The project is built using Object Oriented Programming principles in javascript.

```
CREATE USER eventonica WITH password '<password>';
```

```
ALTER USER eventonica CREATEDB;
```

```
CREATE DATABASE eventonica WITH OWNER eventonica;
```

```
 CREATE TABLE users(
    fName varchar(256) not null,
    lName varchar(256) not null,
    password varchar(256) not null,
    uId SERIAL PRIMARY KEY
);
```

```
CREATE TABLE events(
    eventname varchar(256) not null,
    date date not null,
    category varchar(256) not null,
    eid serial PRIMARY KEY
);
```