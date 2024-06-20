import {faker} from '@faker-js/faker';

const data = [];
const count = 200;

const range = (n: number) => Array.from(Array(n).keys());

for (let i in range(count)) {
  data.push({
    id: faker.string.uuid(),
    city: faker.location.secondaryAddress(),
    country: faker.location.country(),
    airportCode: faker.airline.airport(),
  });
}

export const flightDestinations = data;
