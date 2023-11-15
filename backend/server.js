require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 13000;
const dbUrl = process.env.DB_URL;

app.use(cors());
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error('Error connecting to MongoDB:', error));
db.once('open', () => console.log('Connected to MongoDB'));

app.get('/', (req, res) => {
  res.send('Connected to Backend');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

