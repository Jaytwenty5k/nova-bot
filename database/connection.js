const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://jaydenwoppereryk:pIfQdjBWg1Ga8BKM@octra-bot.4o9re4k.mongodb.net/?retryWrites=true&w=majority&appName=Octra-Bot', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Erfolgreich mit der MongoDB verbunden');
    } catch (error) {
        console.error('Fehler beim Verbinden mit der MongoDB:', error);
        process.exit(1); // Beende den Prozess bei Verbindungsfehler
    }
};

module.exports = connectToDatabase;