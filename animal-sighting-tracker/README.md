#Animal Sightings Tracker

This app helps scientists track sightings of endangered animals.

## PostgreSQL setup


Create user:
```
CREATE USER animal_tracker WITH password '<password>';
```

Give user permission to create new databases:
```
ALTER USER animal_tracker CREATEDB;
```

Create `animal_tracker` database:
```
CREATE DATABASE animal_tracker WITH OWNER animal_tracker;
```

Create `species` table
```
 CREATE TABLE animal_species(
    commonName varchar(256) not null,
    scientificName varchar(256) not null,
    estimatedNumber integer not null,
    conservationStatusCode varchar not null,
    created_at TIMESTAMP not null,
    uId integer PRIMARY KEY
);
```
