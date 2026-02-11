import express from 'express';
import type { Request, Response, Application } from 'express';
import user from "./api/user.js"
const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use('/query',user)
app.get('/', (req: Request, res: Response) => {
  res.json('Hello World with TypeScript and Express!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
