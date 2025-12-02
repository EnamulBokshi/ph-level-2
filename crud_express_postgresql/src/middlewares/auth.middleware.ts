
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import config from "../config";
const auth = ()=>{
    return (req: Request, res:Response, next: NextFunction)=>{
        const token = req.headers.authorization;
        
        console.log("token: ",{autToken: token});
        if(!token){
            return res.status(500).json({
                success:false,
                message:'Auth token is missing'
            })
        }
        const decoded = jwt.verify(token, config.jwtSecret as string)
        console.log(decoded)
        next();
    }
}

export default auth;