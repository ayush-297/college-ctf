require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRouter');
app.use(cors({
    origin: ['http://localhost:3001','https://college-ctf.vercel.app/'],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
}))
require('./db/connection');
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser())
app.use('/userapi', userRouter);


app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
})