import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/userModels.js';
import dotenv from 'dotenv';

dotenv.config();

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};














// Authentication : Checking who you are. 
// You (the user) give your email and password.
// The system checks if your email and password are correct.
// If correct, the system says, "Yes, you are a valid user."
// Then, it gives you a token ✅




// POST 
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user.id },process.env.JWT_SECRET,{ expiresIn:'7h' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// Authorization : Checking what you can do. (Permissions) , like users & admins 

// You send the token (your digital ID card) when you want to do something (like adding a book).
// The system checks:
// Is your token valid?
// Are you allowed to add a book?
// If yes, it lets you do it.
// If not, it stops you.
