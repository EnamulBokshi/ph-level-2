import { NextFunction, Request, Response } from "express"
import { auth } from "../lib/auth"

declare global{
    namespace Express{
        interface Request{
            user?:{
                id: string;
                email: string;
                name: string;
                role: string;
                emailVerified: boolean
            }
        }
    }
}

export enum UserRole{
    USER = "USER",
    ADMIN = "ADMIN"
}

const authMiddleware = (...roles: UserRole[])=>{
    return async (req: Request, res: Response, next: NextFunction)=> {
        try {
            const userSession = await auth.api.getSession({
                headers: req.headers as any
            }); // getting the logged in user session
            if(!userSession) 
            {
                console.error(`Need to login `);
                return res.status(401).json({
                    success:false,
                    message: "You are not authorized!"
                });
            }
            if(!userSession.user.emailVerified){
                return res.status(400).json({
                    success: false,
                    message: "Please verify your email!"
                });
            }
    
            req.user = {
                id: userSession.user.id,
                email: userSession.user.email,
                name: userSession.user.name,
                emailVerified: userSession.user.emailVerified,
                role: userSession.user.role as string
            }
    
            if(roles.length && !roles.includes(req.user.role as UserRole)){
                return res.status(403).json({
                    success: false,
                    message: "Forbidden! You are not authorized to access this route/api "
                })
            }
            
            console.log("Access granted!!!");
    
            next();
        } catch (error) {
            next(error)
        }
        
    }
}

export default authMiddleware;