const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const { AnimalSightingTracker, Species, Individual, Sighting } = require('./src/AnimalSightingTracker');
var pgp = require('pg-promise')();
const uuidv4 = require('uuid').v4;
var db = pgp('postgres://animal_tracker:animal_tracker@localhost:5432/animal_tracker');
const animalSightingTracker = new AnimalSightingTracker(db);

app.listen(port, () => console.log(`Example app listening on port ${port}`));