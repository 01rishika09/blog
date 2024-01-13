const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();

const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')
const rolesRoutes = require('./routes/rolesRoutes')

connectDB();

const app = express();

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/blog", blogRoutes)
app.use("/api/v1/roles", rolesRoutes)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode port no ${PORT}` .bgCyan.white
        );
});