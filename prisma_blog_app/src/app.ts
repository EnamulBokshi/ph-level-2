import express, {Application} from 'express'
import { postRouter } from './modules/post/post.router';
import cors from 'cors'
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';
import commentRouter from './modules/comment/comment.router';
import errorHandler from './middleware/errorHandler';
import notFound from './middleware/notfound';

const app : Application = express();

app.use(express.json());
app.use(cors({
    origin: process.env.APP_URL || "http://localhost:4000"
}))

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use(notFound);

app.use(errorHandler);
export default app;
