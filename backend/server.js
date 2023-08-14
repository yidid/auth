import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();

connectDB();

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());


app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8000;

app.get(('/'),(req, res) =>{
    res.send('Welcome')
})

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
})