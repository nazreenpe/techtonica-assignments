const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const { AnimalSightingTracker, Species, Individual, Sighting } = require('./model/AnimalSightingTracker');
var pgp = require('pg-promise')();
const uuidv4 = require('uuid').v4;
var db = pgp('postgres://animal_tracker:animal_tracker@localhost:5432/animal_tracker');
const animalSightingTracker = new AnimalSightingTracker(db);

app.post('/species', (req, res) => {
    let speciesData = req.body;
    let species = new Species(
        species.commonName, species.scientificName, species.estimatedNumber, 
        species.conservationStatusCode, species.createdAt, species.id
        );
        animalSightingTracker.addSpecies(species, (savedSpecies) => {
        res.send(savedSpecies);
    }, (error) => {
        res.status(500).send({ "error": "Could not save Species" });
    });
})


app.listen(port, () => console.log(`Example app listening on port ${port}`));