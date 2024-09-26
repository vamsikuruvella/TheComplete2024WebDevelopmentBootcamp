import express, { application } from "express"
import morgan from "morgon"

const app=express();
const port=3000
app.use(morgan('combined'));


