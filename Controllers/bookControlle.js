import Book from '../Models/bookModel.js';

export const createBook = async (req, res) => {
  try {
    const book = await Book.create({ ...req.body, userId: req.userId });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create book', error: err.message});
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ where:{ userId: req.userId }});
    res.json(books);
  } catch (err) {
    res.status(500).json({ message:'Failed to fetch books', error: err.message});
  }
};



export const getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({where:{id:req.params.id,userId:req.userId}});
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch book', error: err.message });
  }
};





export const updateBookById = async (req, res) => {
  try {
    const [updated] = await Book.update(req.body, {where: { id: req.params.id, userId:req.userId}});
    if (!updated) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update book', error: err.message });
  }
};






export const deleteBookById = async (req, res) => {
  try {
    const deleted = await Book.destroy({ where: { id: req.params.id, userId: req.userId } });
    if (!deleted) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete book', error: err.message });
  }
};
