const express = require('express');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000

const app = express();

connectDB()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : false}))

const goalRoutes = require('./routes/goalRoutes');


app.use('/api/goals' , goalRoutes);
app.use(errorHandler);

app.listen(port , ()=>{
    console.log(`Server started on port ${port}`);
})