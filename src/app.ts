import express, { Request, Response } from 'express'
import cors from 'cors';
import { RoomsRoutes } from './app/modules/rooms/rooms.route';



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
app.use('/api/v1/rooms', RoomsRoutes)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})


export default app;
