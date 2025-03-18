import express from 'express';
import dotenv from 'dotenv';
import sequelize from './Config/db.js';
import userRouter from './Routes/userRoutes.js';
import bookRouter from './Routes/bookRoute.js';
import cors from 'cors'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/users', userRouter);
app.use('/books', bookRouter);


// Test database connection
sequelize.authenticate().then(() => {
  console.log('Database connected');
  sequelize.sync(); // Sync all models
}).catch(err => console.error('Database connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
