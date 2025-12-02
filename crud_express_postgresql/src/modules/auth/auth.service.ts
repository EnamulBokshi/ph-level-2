import { pool } from "../../config/db"
import bcrypt from 'bcryptjs'

import config from "../../config"
import jwt from 'jsonwebtoken'
const loginUser = async(email: string, password: string)=>{
    const result = await pool.query(`SELECT * FROM users WHERE email=$1`,[email]);

    if(result.rows.length === 0){
        return null;
    }
    const user = result.rows[0];

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    
    if(!isPasswordMatch){
        return null;
    }
 
    const token = jwt.sign({name: user.name, email: user.email}, config.jwtSecret as string, {
        expiresIn: "7d",
    });
    console.log({token})
    return {token, user};

}


export const authServices = {
    loginUser
}