import { Response, Request } from "express";
import { pool } from "../../config/db";
import { todoServices } from "./todo.services";

const createTodo = async(req: Request, res:Response) => {
    const {user_id, title} = req.body;
    try {
        const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1,$2) RETURNING *`,[user_id, title]);

        res.status(201).json({success: true, message:'Todo created successfully!!', data: result.rows[0]});
    } catch (error) {
        res.status(501).json({success: false, message: 'Todo creation failed!!'})
    }
};

const getTodos = async (req: Request, res: Response) => {
    try {
        const users = await pool.query(`
            SELECT * FROM  todos
        `);
        res
            .status(200)
            .json({
                success: true,
                message: "Todos retrieved successfully!!",
                data: users.rows,
            });
    } catch (error) {
        console.log("Todos couldn't retrieve successfully!!");
        res
            .status(500)
            .json({ success: false, message: "Couldn't retrieve users!!" });
    }
}

const getTodo = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const user = await todoServices.getTodo(id as string);

		console.log(id);
		if (user.rows.length === 0) {
			res.status(404).json({ success: false, message: "Todo not found!!." });
		} else {
			res.status(200).json({
				success: true,
				message: "Todo retrieved",
				data: user.rows[0],
			});
		}
	} catch (error: any) {
		console.log("Todo retrieval error: ", error.message);
		res
			.status(500)
			.json({ success: false, message: "Somethings went wrong!!" });
	}
}

const updateTodo = async(req: Request, res: Response)=>{
	try {
		const {id} = req.params;
		const {title} = req.body;
		const result = await todoServices.updateTodo(id as string, title)
		if(result.rows.length === 0){
			res.status(404).json('Todo does not exists!');

		}
		else{
			res.status(204).json({success: false, message: 'Todo updated successfully',data: result.rows[0]});		}
	} catch (error : any) {
		console.log(`Todo updates errors: `, error.message);
		res.status(501).json({success: false, message: `Todo updates error: ${error.message}`});
	}
}


const deleteTodo = async(req: Request, res: Response) => {
	try {
		const {id} = req.params;
		const result = await todoServices.deleteTodo(id as string);
		if(result.rowCount === 0){
			res.status(404).json({success:false, message: "User doesn't exists!!"});
		}else{
			res.status(200).json({
				success: true,
				message: "Todo  deleted successfully",
			    deleteCount: result.rowCount,
			});
		}
	} catch (error:any) {
		console.log("Todo delete error: ",error.message);
		res.status(501).json({success: false, message: `Todo deletion error: ${error.message}`});
	}
}

export const  todoController = {
    getTodos,
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
}