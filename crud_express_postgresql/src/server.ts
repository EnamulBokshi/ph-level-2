import express, { Request, Response } from 'express';
const app = express()
const port = 5000
// For parsing the body
app.use(express.json());

// for form data
// app.use(express.urlencoded());
// app.use()
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!');
})

app.post("/", (req: Request, res: Response) =>{
    const body = req.body;
    res.status(200).json({success: true, data: body});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
