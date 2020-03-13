const uuidv4 = require('uuid').v4;

class AnimalSightingTracker {
    constructor(db) {
        this.db = db;
    }

    addSpecies(sighting, onSuccess, onFailure) {
        return this.db.one(
            'INSERT INTO animal_species(  commonName varchar(256) not null, scientificName varchar(256) not null, estimatedNumber integer not null, conservationStatusCode varchar not null, created_at date not null, id integer PRIMARY KEY) VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
            [species.commonName, species.scientificName, species.estimatedNumber,
            species.conservationStatusCode, species.createdAt, species.id])
            .then(data => { 
                onSuccess(data);
            })
            .catch(error => {
                onFailure(error);
            });
    }

    getSpecies(onSuccess, onFailure) {

    }

    addIndividual(sighting, onSuccess, onFailure) {

    }

    getIndividuals(onSuccess, onFailure) {

    }

    addSighting(sighting, onSuccess, onFailure) {

    }

    getSightings(onSuccess, onFailure) {

    }
}

class Species {
    constructor(commonName, scientificName, estimatedNumber, conservationStatusCode) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.estimatedNumber = estimatedNumber;
        this.conservationStatusCode = conservationStatusCode;
        this.createdAt = new Date();
        this.id = uuidv4();
    }
}

class Individual {
    constructor(nickName, species) {
        this.nickName = nickName;
        this.species = species;
        this.createdAt = new Date();
        this.id = uuidv4();
    }
}

class Sighting {
    constructor(sightedAt, individualSighted, location, isHealthy, sightersEmail) {
        this.sightedAt = new Date(sightedAt);
        this.individualSighted = individualSighted;
        this.location = location;
        this.isHealthy = isHealthy;
        this.sightersEmail = sightersEmail;
        this.createdAt = new Date();
        this.id = uuidv4();
    }

}

module.exports = { AnimalSightingTracker, Species, Individual, Sighting };