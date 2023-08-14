import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app= express();

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