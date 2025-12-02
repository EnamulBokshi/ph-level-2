import { Request, Response, NextFunction} from "express";
import initDB,{pool} from "../../config/db";
import { userServices } from "./users.services";

// Post api controller
const createUser = async (req: Request, res: Response) => {
// console.log(req);
    console.log("Body: ", req.body);
    const { name, email } = req.body;
    try {
        const result = await userServices.createUser(req.body);
        // console.log(result);

        res.status(201).json({
            success: true,
            message: "User Inserted!",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userServices.getUsers();
    
        res
            .status(200)
            .json({
                success: true,
                message: "User retrieved successfully!!",
                data: users.rows,
            });
    } catch (error) {
        console.log("User couldn't retrieve successfully!!");
        res
            .status(500)
            .json({ success: false, message: "Couldn't retrieve users!!" });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await userServices.getUsers();

        console.log(id);
        if (user.rowCount === 0) {
            res.status(404).json({ success: false, message: "User not found!!." });
        } else {
            res.status(200).json({
                success: true,
                message: "User deleted successfully",
                deleteCount: user.rowCount,
            });
        }
    } catch (error: any) {
        console.log("User retrieve error: ", error.message);
        res
            .status(500)
            .json({ success: false, message: "Somethings went wrong!!" });
    }
};

const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await userServices.getUser(id as string);

        console.log(id);
        if (user.rows.length === 0) {
            res.status(404).json({ success: false, message: "User not found!!." });
        } else {
            res.status(200).json({
                success: true,
                message: "User retrieved",
                data: user.rows[0],
            });
        }
    } catch (error: any) {
        console.log("User retrieve error: ", error.message);
        res
            .status(500)
            .json({ success: false, message: "Somethings went wrong!!" });
    }
}

const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {name, email} = req.body;
    try {
        const user = await userServices.updateUser(name, email, id as string);
        console.log(id);
        if (user.rows.length === 0) {
            res.status(404).json({ success: false, message: "User not found!!." });
        } else {
            res.status(200).json({
                success: true,
                message: "User updated successfully",
                data: user.rows[0],
            });
        }
    } catch (error: any) {
        console.log("User retrieve error: ", error.message);
        res
            .status(500)
            .json({ success: false, message: "Somethings went wrong!!" });
    }
}
export const  userControllers = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser

}