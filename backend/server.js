const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Temporary in-memory database
const tempDatabase = {};

app.post('/api/saveUser', (req, res) => {
    const { id, profilePicture } = req.body;
    tempDatabase[id] = { profilePicture };
    res.status(200).send({ message: 'User saved temporarily' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
