import {Router} from 'express';
import { createBook, getAllBooks, getBookById, updateBookById, deleteBookById } from '../Controllers/bookControlle.js';
import verifyToken from '../Middlewares/AuthMiddleware.js';

const bookRouter = Router();

bookRouter.post('/createbooks', verifyToken, createBook);
bookRouter.get('/getbooks', verifyToken, getAllBooks);
bookRouter.get('/getbooks/:id', verifyToken, getBookById);
bookRouter.put('/updatebooks/:id', verifyToken, updateBookById);
bookRouter.delete('/deletebooks/:id', verifyToken, deleteBookById);

export default bookRouter;