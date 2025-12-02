import { pool } from "../../config/db";



const createTodo = async({user_id,title}:{user_id:string,title:string})=>{
    return  await pool.query(`INSERT INTO todos(user_id, title) VALUES($1,$2) RETURNING *`,[user_id, title]);
}

const getTodos = async()=>{
    return  await pool.query(`
            SELECT * FROM  todos
        `);
}


const getTodo = async(id: string)=>{
    return await pool.query(
			`
                SELECT * FROM todos WHERE id = $1
            `,
			[id],
		);
}


// Mutating Services
//update a todo
const updateTodo = async(id:string,title:string)=>{
    return await pool.query(`UPDATE todos SET (title=$1) WHERE id=$2`,[title,id]);
}

//delete a todo
const deleteTodo = async(id:string)=>{
    return await pool.query(`DELETE FROM todos WHERE id=$1`,[id]);
}


export const todoServices = {
    createTodo, 
    getTodo,
    getTodos,
    updateTodo,
    deleteTodo
}
