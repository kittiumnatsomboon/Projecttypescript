import express from 'express';
import type { Request, Response, Application } from 'express';
import cors from 'cors';
import options from './config/allowaccess.js';
import registerapi from "./api/register.js";
// import mongoose from './config/database.config.js';
import serverless  from "serverless-http"
// mongoose;
const app: Application = express();
// const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(options));


app.use('/api/register',registerapi)

app.get('/', (req: Request, res: Response) => {
  res.json('Hello World with TypeScript and Express!');
});


// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

export const handle = serverless(app);