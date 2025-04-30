const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const querystring = require('querystring');

const app = express();
app.use(bodyParser.json());

// Temporary in-memory database
const tempDatabase = {};

const CLIENT_ID = '1363531532127437003'; // Ersetze durch deine Discord-Client-ID
const CLIENT_SECRET = '_F7nqpTD8DlHsdULH-h_wX47ky_ZE3my'; // Ersetze durch dein Discord-Client-Secret
const REDIRECT_URI = 'http://localhost:3000/api/auth/discord/callback';

app.post('/api/saveUser', (req, res) => {
    const { id, profilePicture } = req.body;
    tempDatabase[id] = { profilePicture };
    res.status(200).send({ message: 'User saved temporarily' });
});

app.get('/api/getUser/:id', (req, res) => {
    const { id } = req.params;
    const user = tempDatabase[id];
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).send({ message: 'User not found' });
    }
});

app.get('/api/auth/discord', (req, res) => {
    const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${1363531532127437003}&redirect_uri=${encodeURIComponent(www.bot-nova.vercel.app)}&response_type=code&scope=identify`;
    res.redirect(discordAuthUrl);
});

app.get('/api/auth/discord/callback', async (req, res) => {
    const { code } = req.query;
    if (!code) {
        return res.status(400).send({ message: 'Authorization code missing' });
    }

    try {
        const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', querystring.stringify({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI,
        }), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        const { access_token } = tokenResponse.data;
        const userResponse = await axios.get('https://discord.com/api/users/@me', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const user = userResponse.data;
        tempDatabase[user.id] = { profilePicture: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`, username: user.username };

        res.status(200).send({ message: 'Authentication successful', user });
    } catch (error) {
        console.error('Error during Discord authentication:', error);
        res.status(500).send({ message: 'Authentication failed' });
    }
});

app.get('/api/auth/check', (req, res) => {
    const userId = req.query.userId; // Erwartet eine Benutzer-ID als Abfrageparameter
    if (!userId || !tempDatabase[userId]) {
        return res.status(401).send({ isAuthenticated: false });
    }

    const user = tempDatabase[userId];
    res.status(200).send({
        isAuthenticated: true,
        avatar: user.profilePicture,
        username: user.username,
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
