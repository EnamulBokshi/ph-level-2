import express, {Application} from 'express'
import { postRouter } from './modules/post/post.router';
import cors from 'cors'
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';

const app : Application = express();

app.use(express.json());
app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000"
}))

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use("/posts", postRouter);

export default app;
