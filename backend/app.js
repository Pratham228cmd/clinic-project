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

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/home',homeRoute);
app.use('/about',aboutRoute);
app.use('/appointment',appointmentRoute);
app.use('/lab',labRoute);
app.use('/contact',contactRoute);

app.get("/", (req, res) => {
	res.send("Hello to clinic");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App Listening on port ${PORT}.`)
});
