import mysql from "mysql2/promise";
import dotven from 'dotenv';

const conexao = createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitforconnection: true,
    connectionLimit: 10
});

export default conexao;