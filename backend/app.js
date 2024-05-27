const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({path: './.env'});

const app = express();

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(() => {
	console.log('DB connection established');
})

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App Listening on port ${PORT}.`)
});
