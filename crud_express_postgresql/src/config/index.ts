import path from 'path';
import dotenv from "dotenv";

dotenv.config({path: path.join(__dirname, '../../.env')});

 const config ={
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    connectionStr: process.env.CONNECTION_STR,
    jwtSecret: process.env.JWT_SECRET
}

export default config;

