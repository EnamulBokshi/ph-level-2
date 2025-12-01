import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";
import { config } from "dotenv";
import path from "path";
config({ path: path.join(__dirname, "../.env") });

const app = express();
const port = 5000;

// For parsing the body
app.use(express.json());

// for form data
app.use(express.urlencoded({ extended: true }));

// DB connection
const pool = new Pool({
	connectionString: `${process.env.CONNECTION_STR}`,
});

// pool.connect((err, client, release)=>{
//     if(err){
//         console.error(`Error connect to database: `,err.stack)
//     }
//     else{
//         console.log(`Database connected successfully!!!`);

//     }
// })

// Table creation with error handling
const initDB = async () => {
	try {
		await pool.query(`
            CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY, 
            name VARCHAR(100) NOT NULL,
            age INT,
            email VARCHAR(150) UNIQUE NOT NULL,
            address TEXT,
            phone VARCHAR(16),
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
            )
        `);
		await pool.query(`
            CREATE TABLE IF NOT EXISTS todos(
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id) ON DELETE CASCADE,
            title VARCHAR(200) NOT NULL,
            description TEXT,
            completed BOOLEAN DEFAULT false,
            due_date DATE,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
            )
            `);
		console.log("Database initialized successfully");
	} catch (error) {
		console.error("Database initialization error:", error);
	}
};

initDB();
//Logger middleware

const logger = (req: Request, res: Response, next: NextFunction) =>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}\n`);
    next();
}

//Health check api
app.get("/health-check", logger,(req: Request, res: Response) => {
	res.send("Cool! api is working");
});


//users apis
app.post("/users", async (req: Request, res: Response) => {
	// console.log(req);
	console.log("Body: ", req.body);
	const { name, email } = req.body;
	try {
		const result = await pool.query(
			`
                INSERT INTO users(name, email) VALUES($1, $2) RETURNING *            
            `,
			[name, email],
		);
		console.log(result);

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
});

app.get("/users", async (req: Request, res: Response) => {
	try {
		const users = await pool.query(`
            SELECT * FROM  users
        `);
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
});

app.get("/users/:id", async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const user = await pool.query(
			`
                SELECT * FROM users WHERE id = $1
            `,
			[id],
		);

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
});

app.put("/users/:id", async (req: Request, res: Response) => {
	const { id } = req.params;
    const {name, email} = req.body;
	try {
		const user = await pool.query(
			`
                UPDATE  users SET name = $1, email = $2  WHERE id = $3 RETURNING *
            `,
			[name, email, id],
		);

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
});
app.delete("/users/:id", async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		const user = await pool.query(
			`
                DELETE FROM users where id=$1
            `,
			[id],
		);

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
});


// Todo apis
app.post("/todos", async(req: Request, res:Response) => {
    const {user_id, title} = req.body;
    try {
        const result = await pool.query(`INSERT INTO todos(user_id, title) VALUES($1,$2) RETURNING *`,[user_id, title]);

        res.status(201).json({success: true, message:'Todo created successfully!!', data: result.rows[0]});
    } catch (error) {
        res.status(501).json({success: false, message: 'Todo creation failed!!'})
    }
})
// GET all Todos
app.get("/todos", async (req: Request, res: Response) => {
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
});

// Get a specific TODO:
app.get("/todos/:id", async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const user = await pool.query(
			`
                SELECT * FROM todos WHERE id = $1
            `,
			[id],
		);

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
});

app.use((req:Request, res:Response) =>{
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.path
    })
})
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
