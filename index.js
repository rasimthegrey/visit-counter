const express = require('express');
const redis = require('redis');
// const process = require('process');

const app = express();

// setup a connection to redis server
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
// initialize number of visits to 0 for the first visit
client.set('visits', 0);

// root route
app.get('/', (req, res) => {
    // process.exit(0); // chrash scenario
    client.get('visits', (err, visits) => {
        res.send("number of visits: " + visits);
        client.set('visits', parseInt(visits) + 1); // redis returns visits as string
    });
});

app.listen('8081', () => {
    console.log("Server is running.");
});
