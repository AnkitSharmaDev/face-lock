const express = require('express');
const app = express();

app.use(express.static('.')); // Serve index.html and models folder

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});