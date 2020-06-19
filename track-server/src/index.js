require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routes/authRoutes');
const trackRouter = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

// Parse some json data out of incoming request
app.use(bodyParser.json());

app.use(authRouter);
app.use(trackRouter);

// MongoDB URL
const mongoUri = 'mongodb+srv://admin:GVG&77pk@cluster0-ox0at.mongodb.net/TrackerDB?retryWrites=true&w=majority';

// Connecting to MongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// if connected successfully
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

// if we got any error
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email is: ${req.user.email}`);
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
});