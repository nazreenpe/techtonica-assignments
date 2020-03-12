describe("AnimalSightingTracker", () => {
    const { Species, Individual, Sighting } = require('../src/animalSightingTracker.js');
    const uuidv4 = require('uuid').v4;

    let species, individual, sighting;

    beforeEach(() => {
        species = new Species('Amur Leopard', 'Panthera pardus orientalis', 84, 'CR');
        individual = new Individual('spotty queen', species);
        sighting = new Sighting('2000/12/12', individual, 'Primory-Russia', true, 'wwf@gmail.com');
    });

    describe("Species", () => {
        it('creates a new Species', () => {
            expect(species.commonName).toEqual("Amur Leopard");
            expect(species.scientificName).toEqual('Panthera pardus orientalis');
            expect(species.estimatedNumber).toEqual(84);
            expect(species.conservationStatusCode).toEqual('CR');
            expect(species.createdAt).toBeDefined();
            expect(species.id).toBeDefined();
        });
    });

    describe("Individual", () => {
        it('creates a new Individual', () => {
            expect(individual.nickName).toEqual('spotty queen');
            expect(individual.species.commonName).toEqual("Amur Leopard");
            expect(individual.createdAt).toBeDefined();
        });
    });

    describe("Sighting", () => {
        it('creates a new sighting', () => {
            expect(sighting.sightedAt).toEqual(new Date('2000/12/12'));
            expect(sighting.individualSighted.nickName).toEqual('spotty queen');
            expect(sighting.location).toEqual('Primory-Russia');
            expect(sighting.isHealthy).toEqual(true);
            expect(sighting.sightersEmail).toEqual('wwf@gmail.com');
            expect(sighting.createdAt).toBeDefined();
        });
    });
});