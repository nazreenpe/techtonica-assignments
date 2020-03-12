class AnimalSightingTracker {
    constructor() {

    }

    addSightings() {

    }

    getSightings() {

    }
}

class Species {
    constructor(commonName, scientificName, estimatedNumber, conservationStatusCode) {
        this.commonName = commonName;
        this.scientificName = scientificName;
        this.estimatedNumber = estimatedNumber;
        this.conservationStatusCode = conservationStatusCode;
        this.createdAt = new Date();
    }
}

class Individual {
    constructor(nickName, species) {
        this.nickName = nickName;
        this.species = species;
        this.createdAt = new Date();
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
    }

}

module.exports = { AnimalSightingTracker, Species, Individual, Sighting};