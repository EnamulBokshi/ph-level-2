import config from ".";
import { Pool } from "pg";

// DB connection
export const pool = new Pool({
    connectionString: `${config.connectionStr}`,
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

export default initDB;