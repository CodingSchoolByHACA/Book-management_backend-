import { DataTypes } from 'sequelize';
import sequelize from '../Config/db.js';  // -- db connection - /config/

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

export default User;

// User Table Datas :

// name - username  

// user name 
// user email
// user password