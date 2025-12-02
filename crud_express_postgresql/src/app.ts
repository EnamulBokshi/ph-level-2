import express, { NextFunction, Request, Response } from "express";

import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middlewares/logger.middleware";
import { userRoutes } from "./modules/users/users.routes";
import { todoRoutes } from "./modules/todos/todos.routes";
import authRoutes from "./modules/auth/auth.route";


const app = express();

// For parsing the body
app.use(express.json());

// for form data
app.use(express.urlencoded({ extended: true }));



initDB();
//Logger middleware



//Health check api
app.get("/health-check", logger,(req: Request, res: Response) => {
	res.send("Cool! api is working");
});

// injecting user apis
app.use("/users", userRoutes);




// Todo apis

app.use("/todos", todoRoutes);

// Get a specific TODO:

app.use('/auth', authRoutes); 
// 404 route handling 
app.use((req:Request, res:Response) =>{
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.path
    })
});


export default app;
