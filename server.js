/** @format */

const express = require('express');
const mongoose = require('mongoose');
const PORT = 7077;
require('dotenv').config();
const WorksRoute = require('./Routes/works');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/', WorksRoute);

mongoose.connect(`${process.env.MONGODB_URL}`, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error during db connection'));
db.once('open', () => console.log('Database successfully connected'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
