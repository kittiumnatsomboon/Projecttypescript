import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql.createPool({
    host:process.env.DBHOST!,
    user:process.env.DBUSER!,
    password:process.env.DBPASSWORD!,
    database:process.env.DBDATABASE!,
    queueLimit:0,
    connectionLimit:10
})

export default pool;