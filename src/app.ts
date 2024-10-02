import express, { Request, Response } from 'express'
import cors from 'cors';



const app = express()

//middlewares
app.use(express.json())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
  })
);




// application routes




app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


export default app;
