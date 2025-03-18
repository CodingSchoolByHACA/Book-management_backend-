// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();

// const verifyToken = (req, res, next) => {
//   console.log('Request Headers:', req.headers);

//   // Attempt to extract token from either 'authorization' or 'x-access-token'
//   const token = req.headers['authorization']?.split(' ')[1] || req.headers['x-access-token'];
//   console.log('Extracted Token:', token);

//   if (!token) {
//     return res.status(403).send({ message: 'No token provided' });
//   }

//   const secretKey = process.env.secretKey;
//   console.log('Secret Key:', secretKey);

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       console.error('Token Verification Error:', err);
//       return res.status(500).send({ message: 'Failed to authenticate token' });
//     }

//     console.log('Decoded Token:', decoded);
//     req.userId = decoded.id;
//     next();
//   });
// };

// export default verifyToken;


import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const verifyToken = (req, res, next) => {
  
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(403).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
    req.userId = decoded.id;
    next();
  });
};

export default verifyToken;


// The token is usually sent in the Authorization header like this : Authorization: Bearer <your_token_here> 

// split(' ')[1]: Takes the token after the word Bearer. 


