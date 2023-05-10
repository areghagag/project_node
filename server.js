import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from "dotenv";
import subjectRoute from "./routes/subjects.js";
import departmentRoute from "./routes/departments.js"
dotenv.config();
mongoose.connect('mongodb://127.0.0.1:27017/students'); 
const app=express();
app.use(express.urlencoded({extended: true}))
mongoose.connect(process.env.mongoConnectionurl);
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './template');
app.use('/subjects',subjectRoute)
app.use('/departments',departmentRoute)
app.listen(process.env.port,() => {
    console.log("started the application on http://localhost:"+process.env.port);
});