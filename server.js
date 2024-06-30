const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8082;

app.use(bodyParser.json());

// Define the path to your data.json file
const dataFilePath = path.join(__dirname, 'data', 'data.json');

// GET endpoint to serve the data
app.get('/data.json', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData); // Respond with JSON
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Error parsing JSON');
        }
    });
});

// POST endpoint to create new data
app.post('/data.json', (req, res) => {
    // Read existing data from data.json
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            const newId = jsonData.length + 1; // Generate new ID (assuming IDs are sequential)

            // Create new item object
            const newItem = {
                id: newId,
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                type: req.body.type,
                image: req.body.image
            };

            // Push new item to existing data array
            jsonData.push(newItem);

            // Write updated data back to data.json
            fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error writing to data file:', err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
                res.json(newItem); // Respond with JSON of the newly created item
            });
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Error parsing JSON');
        }
    });
});

// PUT endpoint to update the data (if needed)
app.put('/data.json', (req, res) => {
    // Implement update logic here if required
    res.status(404).send('PUT method not implemented for this endpoint');
});

app.listen(PORT, '192.168.0.103', () => {
    console.log(`Server is running on http://192.168.0.103:${PORT}`);
});
