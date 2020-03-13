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

Create `animal_species` table
```
 CREATE TABLE animal_species(
    commonName varchar(256) not null,
    scientificName varchar(256) not null,
    estimatedNumber integer not null,
    conservationStatusCode varchar not null,
    created_at date not null,
    id integer PRIMARY KEY
);
```

Create `individuals` table:
```
CREATE TABLE individuals(
    nickName varchar(256) not null,
    animal_species_id integer not null,
    created_at date not null,
    id integer PRIMARY KEY
);
```

Create `sightings` table:
```
CREATE TABLE sightings(
    sightedAt date,
    individualSighted_id integer not null,
    location varchar(256) not null,
    isHealthy boolean,
    sightersEmail varchar(320),
    created_at date not null,
    id integer PRIMARY KEY
);
```