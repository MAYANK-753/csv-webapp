// backend/index.js
const express = require('express');
const multer = require('multer');
const Papa = require('papaparse');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    const filePath = file.path;

    // Parse CSV file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    Papa.parse(fileContent, {
        header: true,
        complete: function(results) {
            // Send parsed data as response
            res.json(results.data);
            // Clean up the uploaded file
            fs.unlinkSync(filePath);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
