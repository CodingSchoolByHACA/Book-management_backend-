import { DataTypes } from 'sequelize';
import sequelize from '../Config/db.js'; //-- dbconnection
import User from '../Models/userModels.js';

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  publishedDate: { type: DataTypes.DATE },
  pages: { type: DataTypes.INTEGER },
  language: { type: DataTypes.STRING },
  publisher: { type: DataTypes.STRING },
}, { timestamps: true });

Book.belongsTo(User, { foreignKey: 'userId' });

export default Book;