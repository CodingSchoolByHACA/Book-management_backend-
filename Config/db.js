// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//   host: process.env.DB_HOST,
//   dialect: 'mysql',
// });


// export default connection;
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const dbConnection = new Sequelize(process.env.MYSQL_PUBLIC_URL, {
    dialect: "mysql",
    logging: console.log, // Optional: Enables SQL query logs
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

export default dbConnection;