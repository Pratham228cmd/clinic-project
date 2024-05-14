// const express = require("express");
// const bodyParser = require("body-parser");
// const cors=require("cors");
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import homeRoute from "./routes/home.js";
import aboutRoute from "./routes/about.js";
import appointmentRoute from "./routes/appointment.js";
import contactRoute from "./routes/contact.js";
import labRoute from "./routes/lab.js";
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 3000;

app.use('/home',homeRoute);
app.use('/about',aboutRoute);
app.use('/appointment',appointmentRoute);
app.use('/lab',labRoute);
app.use('/contact',contactRoute);

app.get("/", (req, res) => {
	res.send("Hello to clinic");
});


app.listen(PORT, () => {
	console.log(`App Listening on port ${PORT}.`)
});
