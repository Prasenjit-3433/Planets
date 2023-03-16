const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

// Reading CSV data as a stream --> returns raw buffers of bytes
fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', (data) => {
        results.push(data);
    })
    .on('error', (error) => {
        console.log(error);
    })
    .on('end', () => {
        console.log(results);
        console.log('Done!');
    });